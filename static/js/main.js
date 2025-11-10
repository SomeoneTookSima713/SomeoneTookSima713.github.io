document.getElementById("loading_screen").addEventListener("loading_finished", event => {
    setTimeout(() => {
        document.getElementById("loading_screen").classList.add("loading-screen-finished");
        setTimeout(() => {
            document.getElementById("loading_screen").classList.add("d-none");
        }, 1000);
    }, 500);
});

/** @type{HTMLElement} */
let tab;
for (tab of document.querySelectorAll('button[data-bs-toggle="pill"].main-tab-nav')) {
    tab.style.zIndex = 0;
    tab.addEventListener("show.bs.tab", event => {
        let from_selector = event.relatedTarget.attributes.getNamedItem("data-bs-target").value;
        let to_selector = event.target.attributes.getNamedItem("data-bs-target").value;

        /** @type{HTMLElement} */
        let elem;
        for (elem of document.querySelectorAll('.main-tab')) {
            elem.style.zIndex = Math.max(elem.style.zIndex-1, -9);
        }
        document.querySelector(to_selector).style.zIndex = 1;

        document.querySelector(from_selector).classList.remove("selected-main-tab");
        document.querySelector(to_selector).classList.add("selected-main-tab");
    });
}
document.getElementById("game-tab-pane").style.zIndex = 1;

document.getElementById("check_grammar_fix_btn").onclick = event => {
    const ANIM_LEN = 800;

    let tries_elem = document.getElementById("check_grammar_fix_tries");
    let button_elem = document.getElementById("check_grammar_fix_btn");
    /** @type{HTMLInputElement} */
    let input_elem = document.getElementById("grammer_corrected_sentence");
    tries_elem.attributes.getNamedItem("data-tries-left").value -= 1;
    button_elem.classList.add("disabled");
    input_elem.classList.add("shake-anim");
    input_elem.disabled = true;

    let timeout = (ANIM_LEN*0.75) / input_elem.value.length;
    let interval_id = setInterval(() => {
        input_elem.value = input_elem.value.substring(0, input_elem.value.length-1);
    }, timeout);

    setTimeout(() => {
        input_elem.classList.remove("shake-anim");
        if (tries_elem.attributes.getNamedItem("data-tries-left").value > 0) {
            button_elem.classList.remove("disabled");
            input_elem.disabled = false;
        } else {
            next_stage();
        }
        clearInterval(interval_id);
        input_elem.value = "";
    }, ANIM_LEN);
};

const MATH_QUESTIONS = [
    ["5 + 4 \\cdot 3 - 12", "5"],
    ["34 \\cdot 2 - 17 \\cdot 3", "17"],
    ["\\left(\\int_{-\\ln e\\upuparrows2}^{e}\\int_{-\\pi}^{\\pi}\\left|\\sin^{5,2}(t)\\right|\\arctan(\\lg\\xi^3)dtd\\xi\\right) - \\binom{10}{2} \\cdot \\left| \\begin{pmatrix}4 & 4\\int_0^1\\sqrt{1-f^2}df \\\\ \\frac{e}{0,25\\pi} & e+0,125 \\end{pmatrix} \\right|", "22,5"],
    ["1+\\sum_{i=1}^{2^{10}}\\left\\lfloor \\left( \\frac{10}{\\sum_{j=1}^i\\left\\lfloor \\left( \\cos \\frac{(j-1)!+1}{j}\\pi \\right)^2 \\right\\rfloor} \\right)^{\\frac{1}{10}} \\right\\rfloor", "29"],
    ["\\text{Cheater >:(}", ":["]
];

var curr_math_question = 0;
document.getElementById("math_container").textContent = `\\[${MATH_QUESTIONS[curr_math_question][0]}\\]`;

document.getElementById("check_math_answer_btn").onclick = event => {
    const ANIM_LEN = 800;

    let tries_elem = document.getElementById("check_math_answer_tries");
    let button_elem = document.getElementById("check_math_answer_btn");
    /** @type{HTMLInputElement} */
    let input_elem = document.getElementById("math_answer");
    if (input_elem.value == MATH_QUESTIONS[curr_math_question][1]) {
        input_elem.disabled = true;

        let timeout = (ANIM_LEN*0.75) / input_elem.value.length;
        let interval_id = setInterval(() => {
            input_elem.value = input_elem.value.substring(0, input_elem.value.length-1);
        }, timeout);

        setTimeout(() => {
            button_elem.classList.remove("disabled");
            input_elem.disabled = false;
            clearInterval(interval_id);
            input_elem.value = "";
        }, ANIM_LEN);

        curr_math_question += 1;
        document.getElementById("math_container").firstChild.remove();
        document.getElementById("math_container").textContent = `\\[${MATH_QUESTIONS[curr_math_question][0]}\\]`;
        MathJax.typesetPromise([document.getElementById("math_container")]);
        // katex.render(MATH_QUESTIONS[curr_math_question][0], document.getElementById("math_container"));
    } else {
        tries_elem.attributes.getNamedItem("data-tries-left").value -= 1;
        button_elem.classList.add("disabled");
        input_elem.classList.add("shake-anim");
        input_elem.disabled = true;

        let timeout = (ANIM_LEN*0.75) / input_elem.value.length;
        let interval_id = setInterval(() => {
            input_elem.value = input_elem.value.substring(0, input_elem.value.length-1);
        }, timeout);

        setTimeout(() => {
            input_elem.classList.remove("shake-anim");
            if (tries_elem.attributes.getNamedItem("data-tries-left").value > 0) {
                button_elem.classList.remove("disabled");
                input_elem.disabled = false;
            } else {
                next_stage();
            }
            clearInterval(interval_id);
            input_elem.value = "";
        }, ANIM_LEN);
    }
};

var last_clear_cb = -1;
function setGameHoverDescription(text) {
    let game_container = document.getElementById("game_container");
    let elem = document.getElementById("game_description_card");
    let text_elem = document.querySelector("#game_description_card .card-body .card-text");
    if (text == null) {
        elem.classList.remove("enabled")
        if (last_clear_cb > -1) {
            clearTimeout(last_clear_cb);
        }
        last_clear_cb = setTimeout(() => {
            text_elem.textContent = "";
        }, 1000);
        game_container.style.cursor = "default";
    } else {
        elem.classList.add("enabled")
        if (last_clear_cb > -1) {
            clearTimeout(last_clear_cb);
        }
        text_elem.innerHTML = text;
        game_container.style.cursor = "pointer";
    }
}

function playAudio(url) {
    (new Audio(url)).play();
}

var curr_msgbox = {
    enabled: false,
    title: "",
    final_text: "",
    curr_text: ""
};

/** @type{?(value: any) => void} */
let curr_msgbox_waiter = null;

function update_msgbox() {
    let msgbox = document.getElementById("messages");
    if (curr_msgbox.enabled) {
        msgbox.classList.add("enabled");
    } else {
        msgbox.classList.remove("enabled");
    }

    if (curr_msgbox.final_text.length <= curr_msgbox.curr_text.length) {
        for (let elem of msgbox.querySelectorAll(".card-body .btn")) {
            elem.classList.add("enabled");
        }
    } else {
        for (let elem of msgbox.querySelectorAll(".card-body .btn")) {
            elem.classList.remove("enabled");
        }

        curr_msgbox.curr_text += curr_msgbox.final_text.charAt(curr_msgbox.curr_text.length);
        msgbox.querySelector(".card-body .card-text").innerHTML = curr_msgbox.curr_text;
    }

    msgbox.querySelector(".card-body .card-title").innerHTML = curr_msgbox.title;
}

function disable_msgbox() {
    curr_msgbox.enabled = false;
    if (curr_msgbox_waiter != null) {
        curr_msgbox_waiter();
    }
}

function enable_msgbox(title, text) {
    curr_msgbox.enabled = true;
    curr_msgbox.title = title;
    curr_msgbox.final_text = text;
    curr_msgbox.curr_text = "";
}

function async_blocking_msgbox(title, text) {
    enable_msgbox(title, text);
    return new Promise((resolve)  => {
        curr_msgbox_waiter = resolve;
    })
}

setInterval(update_msgbox, 33);

function next_stage() {
    let grammar_tab_btn = document.querySelector('[data-bs-target="#grammar-tab-pane"]');
    let math_tab_btn = document.querySelector('[data-bs-target="#math-tab-pane"]');

    if (grammar_tab_btn.classList.contains("disabled")) {
        async_blocking_msgbox("„Dieser Mann tut mir leid.“", "Oh nein, du bist ins Gefängnis gewandert! Versuch dich doch an etwas Anderem in der oberen rechten Ecke, was du gleich freischalten wirst!").then(() => {
            grammar_tab_btn.classList.remove("disabled");
        });
    } else if (math_tab_btn.classList.contains("disabled")) {
        async_blocking_msgbox("In der Mitte etwas, das halb Pritsche, halb Operationstisch war.", "Du hast es nicht so mit den #E9(4*+Ä_]$'schen Grammatikregeln, was? Versuch dich doch an der letzten Sache, vielleicht bist du da immerhin besser...").then(() => {
            math_tab_btn.classList.remove("disabled");
        });
    } else {
        async_blocking_msgbox("", "Könnte ich noch andere Luft schmecken als die des Gefängnisses? Das ist die große Frage oder vielmehr, sie wäre es, wenn ich noch Aussicht auf Entlassung hätte.").then(() => {
            math_tab_btn.classList.remove("disabled");
        });
    }
}