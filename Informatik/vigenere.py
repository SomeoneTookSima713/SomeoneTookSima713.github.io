BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

probs_german = {
    'a': 0.0651,
    'b': 0.0189,
    'c': 0.0306,
    'd': 0.0508,
    'e': 0.1740,
    'f': 0.0166,
    'g': 0.0301,
    'h': 0.0476,
    'i': 0.0755,
    'j': 0.0027,
    'k': 0.0121,
    'l': 0.0344,
    'm': 0.0253,
    'n': 0.0978,
    'o': 0.0251,
    'p': 0.0079,
    'q': 0.0002,
    'r': 0.0700,
    's': 0.0727,
    't': 0.0615,
    'u': 0.0435,
    'v': 0.0067,
    'w': 0.0189,
    'x': 0.0003,
    'y': 0.0004,
    'z': 0.0113
}

def encrypt(text, code):
    codef = [code[i%len(code)] for i in range(len(text))]

    ret = ""
    sub = 0
    for i in range(len(text)):
        if text[i] == " ":
            sub += 1
            ret += " "
            continue
        ret += BASE[(BASE.find(text[i])+BASE.find(code[(i-sub)%len(code)]))%26]
    return ret

def decrypt(text, code):
    codef = [code[i%len(code)] for i in range(len(text))]

    ret = ""
    sub = 0
    for i in range(len(text)):
        if not text[i] in BASE:
            sub += 1
            ret += text[i]
            continue
        ret += BASE[(BASE.find(text[i])-BASE.find(code[(i-sub)%len(code)]))%26]
    return ret

def gen_codes(curr_len: int):
    if curr_len==0:
        yield "A"
    else:
        for possib in gen_codes(curr_len-1):
                yield possib
        for i in range(26):
            for possib in gen_codes(curr_len-1):
                yield possib + BASE[i:i+1]

class Decrypt:
    def occurence_analysis(msg: str) -> dict:
        chars = {}
        i = 0
        for c in msg.upper():
            if not c in BASE:
                continue
            i += 1
            if not chars.get(c.lower()):
                chars[c.lower()] = 1
            else:
                chars[c.lower()] += 1
        for c in chars:
            chars[c] /= i
        return chars

    def compute_occurence_similarity(a: dict, b: dict) -> float:
        diffs = {}
        for k in set(a.keys()).union(set(b.keys())):
            if a.get(k) and b.get(k):
                diffs[k] = max(a[k], b[k])-min(a[k], b[k])
            elif a.get(k):
                diffs[k] = 0
        diff = 0.0
        for d in list(dict.values(diffs)):
            diff += d / len(diffs)
        return diff
    
    def brute_force_key(msg: str, returned_vals: int = 1) -> list[float]:
        closest = []
        code_base = ""
        for code in gen_codes(9):
            text = decrypt(msg, code)
            sim = Decrypt.compute_occurence_similarity(probs_german, Decrypt.occurence_analysis(text))
            closest.append((sim, code))
        closest = sorted(closest, key=lambda  v : v[0])
        return [closest[i][1] for i in range(returned_vals%27)]