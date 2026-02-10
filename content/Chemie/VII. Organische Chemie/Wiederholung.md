```latex {cmd=true hide latex_zoom=5}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\color{white}
\begin{document}
VII. Organische Chemie
\end{document}
```
$\def\bondp#1#2{{\,\enclose{horizontalstrike}{(}\, \ce{#1} \,\enclose{horizontalstrike}{)}_{\!#2}}}$

---

# Wiederholung

## Vorsilben
* Meth-
* Eth-
* Prop-
* But-
* Pent-
* Hex-
* Hept-
* Oct-
* Non-
* Dec-
* Undec-
* Dodec-
* Tridec-
* Tetradec-
* Pentadec-
* Hexadec-
* Heptadec-
* Octadec-
* Nonadec-
* Eicos-

## Alkane
###### $\ce{ C_nH_{2n+2} }$

Stoff|vereinfachte Strukturformel
-|-
Methan|$\ce{ CH4 }$ 
Ethan|$\ce{ CH3-CH3 }$ 
Propan|$\ce{ CH3-CH2-CH3 }$ 
Butan|$\ce{ CH3-CH2-CH2-CH3 }$
$\vdots$|$\vdots$
Eicosan|$\ce{ CH3\bondp{CH2}{18}CH3 }$

## Alkane
###### $\ce{ C_nH_{2n} }$

Stoff|vereinfachte Strukturformel
-|- 
Ethen|$\ce{ CH2=CH2 }$
Propen|$\ce{ CH2=CH-CH3 }$ 
But-1-en|$\ce{ CH2=CH-CH2-CH3 }$
But-2-en|$\ce{ CH3-CH=CH-CH3 }$
But-1,3-dien|$\ce{ CH2=CH-CH=CH2 }$
$\vdots$|$\vdots$
Eicos-1-en|$\ce{ CH2=CH\bondp{CH2}{17}CH3 }$
Eicos-2-en|$\ce{ CH3-CH=CH\bondp{CH2}{16}CH3 }$
Eicos-5,6,7-trien|$\ce{ CH3-CH2-CH2-CH2-CH=C=CH\bondp{CH2}{12}CH3 }$

## Alkine
###### $\ce{ C_nH_{2n-2} }$

Stoff|vereinfachte Strukturformel
-|- 
Ethin|$\ce{ CH#CH }$
Propin|$\ce{ CH#C-CH3 }$ 
But-1-in|$\ce{ CH # C-CH2-CH3 }$
But-2-in|$\ce{ CH3-C # C-CH3 }$
But-1,3-diin|$\ce{ CH # C-C # CH }$
$\vdots$|$\vdots$
Eicos-1-in|$\ce{ CH #C\bondp{CH2}{17}CH3 }$
Eicos-2-in|$\ce{ CH3-C #C\bondp{CH2}{16}CH3 }$

## Stoffnamen von komplexeren Molekülen
```latex {cmd=true hide latex_zoom=1.5}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\usepackage{chemfig}
\color{white}
\begin{document}
\chemfig{C^{4}H_3-C^{3}H_2-C^{2}H_2(-[6]CH_3)-C^{1}H_3}
\end{document}
```

2-Methyl-Butan

Reihenfolge für von welcher Seite aus man zählt:
1. -säure
2. -al / -on
3. -ol
4. -in
5. -en

Für die Nomenklatur herrscht die umgekehrte Reihenfolge für Prioritäten (Säuren kommen ganz am Schluss, Alkene ganz am Anfang)

## Alkohole

* wenn an dem Kohlenstoffatom, an dem die OH-Gruppe dransteht, ein weiteres C-Atom dranhängt, ist es ein **primärer** Alkohol. Das selbe gilt für zwei C-Atome und **sekundäre** Alkohole und drei C-Atome und **tertiäre** Alkohole
    * **primärer Alkohol**:
    ```latex {cmd=true hide latex_zoom=1.5}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \color{white}
    \begin{document}
    \chemfig{[,0.75]CH_3-CH_2-OH}
    \end{document}
    ```
    Ethanol

    * **sekundärer Alkohol**:
    ```latex {cmd=true hide latex_zoom=1.5}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \color{white}
    \begin{document}
    \chemfig{[,0.75]CH_3-CH_2(-[6]CH_3)-OH}
    \end{document}
    ```
    Propan-2-ol

    * **tertiärer Alkohol**:
    ```latex {cmd=true hide latex_zoom=1.5}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \color{white}
    \begin{document}
    \chemfig{[,0.75]CH_3-C(-[2]CH_3)(-[6]CH_3)-OH}
    \end{document}
    ```
    2-Methyl-propan-2-ol
* die Wertigkeit wird durch die Anzahl der OH-Gruppen bestimmt
    * **einwertig**:
    ```latex {cmd=true hide latex_zoom=1.5}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \color{white}
    \begin{document}
    \chemfig{[,0.75]CH_3-OH}
    \end{document}
    ```
    Methanol

    * **zweiwertig**:
    ```latex {cmd=true hide latex_zoom=1.5}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \color{white}
    \begin{document}
    \chemfig{[,0.75]CH_2(-[6]OH)-CH_2-[6]OH}
    \end{document}
    ```
    Ethan-1,2-diol

    * **dreiwertig**:
    ```latex {cmd=true hide latex_zoom=1.5}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \color{white}
    \begin{document}
    \chemfig{[,0.75]CH_2(-[6]OH)-CH(-[6]OH)-CH_2-[6]OH}
    \end{document}
    ```
    Propan-1,2,3-triol / Glycerin

## Aldehyde
```latex {cmd=true hide latex_zoom=1.5}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\usepackage{chemfig}
\color{white}
\begin{document}
\chemname{~~~~~~~~~~~\chemfig{[,0.75]HC(=[1]O)-[7]H}~~~~~~~~~~~}{Methanal/Formaldehyd} \\[1cm]
\chemfig{[,0.75]CH_3-C(=[1]O)-[7]H} \\[1cm]
\chemname{\chemfig{[,0.75]CH_3-CHO}}{Ethanal}
\end{document}
```

## Ketone
```latex {cmd=true hide latex_zoom=1.5}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\usepackage{chemfig}
\color{white}
\begin{document}
\chemname{~~\chemfig{[,0.75]CH_3-C(=[6]O)-CH_3}~~}{Propanon/Aceton}
\end{document}
```

## Carbonsäuren
```latex {cmd=true hide latex_zoom=1.5}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\usepackage{chemfig}
\color{white}
\begin{document}
\chemfig{[,0.75]HC(=[1]O)-[7]OH} \\[1cm]
\chemname{~~~\chemfig{[,0.75]HCOOH}~~}{Methansäure} \\[1cm]
\chemname{\chemfig{[,0.75]CH_3-C(=[1]O)-[7]OH}}{Ethansäure}
\end{document}
```