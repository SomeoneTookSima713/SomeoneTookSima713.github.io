# Drosophila melanogaster
###### Fruchtfliege

### "Die Fruchtfliege hat alles" - Schädlich
###### Warum sie so gut für Züchter geeignet ist
* schnelle Generationsfolge
* ein Fliegenpaar hat bis zu 300 Nachkommen
* brauchen wenig Raum, wenig Nahrung (weil sie so klein sind)
* mit einer Lupe sind Merkmale der Fruchtfliege gut zu erkennen
* trägt gut kontrollierbare Merkmale
* hat im Haploiden Zustand nur 4 Chromosomen

Mutante|Symbol|Phänotyp
-|-|-
white|w|weiße Augen
vestigial|vg|stummelflüglig
ebony|e|ebenholzfarbiger Körper
cinnabar|cn|leuchtend rote Augen
black|b|schwarzer Körper
Lobe|L|verkleinerte Augen
Curly|Cy|stark aufgebogene Flügel

#### Beispiel Kreuzung
$\displaystyle P ~~~~~~ \frac{\text{w}}{\text{w}} \frac{\text{vg}}{\text{vg}} ~\times~ \frac ++ \frac ++ $

Gameten: (wvg)(wvg) X (+)(+)

$\displaystyle F_1 ~~~~~~ 4\times \frac{+}{\text{w}} \frac{+}{\text{vg}} ~~~$ Wildtyp

```latex {cmd=true hide latex_zoom=2}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\color{white}
\renewcommand{\arraystretch}{2.22}
\begin{document}
$F_2$\\
\begin{tabular}{c c|c c|c c|c c|c c}
&& +&+ & +&vg & w&+ & w&vg \\
\hline
+&+ & $\frac ++$&$\frac ++$ & $\frac{+}{+}$&$\frac{+}{\textrm{vg}}$ & $\frac{+}{\textrm{w}}$&$\frac{+}{+}$ & $\frac{+}{\textrm{w}}$&$\frac{+}{\textrm{vg}}$ \\[8pt]
\hline
+&vg & $\frac ++$&$\frac +{\textrm{vg}}$ & $\frac{+}{+}$&$\frac{\textrm{vg}}{\textrm{vg}}$ & $\frac{+}{\textrm{w}}$&$\frac{+}{\textrm{vg}}$ & $\frac{+}{\textrm{w}}$&$\frac{\textrm{vg}}{\textrm{vg}}$ \\[8pt]
\hline
w&+  & $\frac +{\textrm{w}}$&$\frac ++$ & $\frac{+}{\textrm{w}}$&$\frac{+}{\textrm{vg}}$ & $\frac{\textrm{w}}{\textrm{w}}$&$\frac{+}{+}$ & $\frac{\textrm{w}}{\textrm{w}}$&$\frac{+}{\textrm{vg}}$ \\[8pt]
\hline
w&vg & $\frac +{\textrm{w}}$&$\frac +{\textrm{vg}}$ & $\frac{+}{\textrm{w}}$&$\frac{\textrm{vg}}{\textrm{vg}}$ & $\frac{\textrm{w}}{\textrm{w}}$&$\frac{+}{\textrm{vg}}$ & $\frac{\textrm{w}}{\textrm{w}}$&$\frac{\textrm{vg}}{\textrm{vg}}$ \\[8pt]
\end{tabular}
\end{document}
```

* 9 Wildtyp
* 3 Wildtyp Auge, stummelflüglig (neu)
* 3 Wildtyp Flügel, weiße Augen (neu)
* 1 weiße Augen, stummelflüglig

#### Beispiel Kreuzung 2
$\displaystyle P ~~~~~~ \frac++ \frac{\text{cn}}{\text{cn}} ~\times~ \frac{\text b}{\text b} \frac ++ $

Gameten: (+cn)(+cn) X (b+)(b+)

$\displaystyle F_1 ~~~~~~ 4\times \frac{+}{\text{b}} \frac{+}{\text{cn}} ~~~$ Wildtyp

```latex {cmd=true hide latex_zoom=2}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\color{white}
\renewcommand{\arraystretch}{2.22}
\begin{document}
$F_2$\\
\begin{tabular}{c c|c c|c c|c c|c c}
&& +&+ & +&cn & b&+ & b&cn \\
\hline
+&+ & $\frac ++$&$\frac ++$ & $\frac{+}{+}$&$\frac{+}{\textrm{cn}}$ & $\frac{+}{\textrm{b}}$&$\frac{+}{+}$ & $\frac{+}{\textrm{b}}$&$\frac{+}{\textrm{cn}}$ \\[8pt]
\hline
+&cn & $\frac ++$&$\frac +{\textrm{cn}}$ & $\frac{+}{+}$&$\frac{\textrm{cn}}{\textrm{cn}}$ & $\frac{+}{\textrm{b}}$&$\frac{+}{\textrm{cn}}$ & $\frac{+}{\textrm{b}}$&$\frac{\textrm{cn}}{\textrm{cn}}$ \\[8pt]
\hline
b&+  & $\frac +{\textrm{b}}$&$\frac ++$ & $\frac{+}{\textrm{b}}$&$\frac{+}{\textrm{cn}}$ & $\frac{\textrm{b}}{\textrm{b}}$&$\frac{+}{+}$ & $\frac{\textrm{b}}{\textrm{b}}$&$\frac{+}{\textrm{cn}}$ \\[8pt]
\hline
b&cn & $\frac +{\textrm{b}}$&$\frac +{\textrm{cn}}$ & $\frac{+}{\textrm{b}}$&$\frac{\textrm{cn}}{\textrm{cn}}$ & $\frac{\textrm{b}}{\textrm{b}}$&$\frac{+}{\textrm{cn}}$ & $\frac{\textrm{b}}{\textrm{b}}$&$\frac{\textrm{cn}}{\textrm{cn}}$ \\[8pt]
\end{tabular}
\end{document}
```

* 9 Wildtyp (neu)
* 3 Wildtyp Körper, leuchtend rote Augen
* 3 Wildtyp Augen, schwarzer Körper
* 1 schwarzer Körper, leuchtend rote Augen (neu)

### Geschlechtsgebundene Vererbung
$\displaystyle P ~~~~~~ \frac++ \frac++ ~\times~ \frac+{\sqrt{\,}} \frac{\text w}{\text w} $

Gameten: `Zwei Kreise mit roten Augen, eine Samenzelle mit weißem Auge, eine Samenzelle mit Haken; bin zu faul zum Zeichnen`

$\displaystyle F_1 ~~~~~~ 2\times\frac++ \frac{+}{\text w} ~~~ 2\times \frac{+}{\sqrt{\,}}\frac+{\text w} ~~~$ rote Augen, zweimal weiblich, zweimal männlich

$\displaystyle P^{-1} ~~~~~~ \frac ++\frac{\text w}{\text w} ~\times~ \frac{+}{\sqrt{\,}} \frac ++ $

Gameten: `Zwei Kreise mit weißen Augen, eine Samenzelle mit rotem Auge, eine Samenzelle mit Haken; bin zu faul zum Zeichnen`

$\displaystyle F_1^{-1} ~~~~~~ 2\times\frac++ \frac+{\text w} ~~~ 2\times\frac+{\sqrt{\,}} \frac+{\text w} ~~~$ rote Augen, zweimal weiblich, zweimal männlich

### Tödliche (Letale) Gene
$\displaystyle P ~~~~~~ \frac{\text L +}{+\text{Cy}} ~\times~ \frac{\text L +}{+\text{Cy}} ~~~$ (Wenn ein Strich komplett durchgezogen ist bei mehreren Genen, dann nennt man sie *gekoppelte Gene*)

$\displaystyle F_1 ~~~~~~ \frac{\text L +}{\text L +} ~~~ 2\times \frac{\text L +}{+\text{Cy}} ~~~ \frac{+\text{Cy}}{+\text{Cy}} $
###### (Das Erste und Letzte ist tödlich)
