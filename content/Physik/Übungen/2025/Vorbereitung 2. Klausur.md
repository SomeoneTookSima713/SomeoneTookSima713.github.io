> Kleiner Hinweis: Wenn ich irgendwas mit nem := schreibe, heißt das, dass ich die Variable, Funktion usw. als das, was danach kommt, definiert.
> 
> Das bedeutet, dass $t := 5 \text{ s}$ im Wortlaut bedeutet: "$t$ ist als 5 Sekunden definiert"
> 
> Das ist einfach ein Weg, explizit auszudrücken, dass man eine Variable oder Funktion auf eine Gleichung oder einen Wert setzt und das nicht aus irgendeiner anderen Gleichung oder so hervorgeht. Das braucht man nicht und man kann stattdessen auch einfach ein normales Gleichungszeichen (=) schreiben (und je nachdem welchen Dozenten/Professor man hat, würde man das vielleicht nichtmal im Mathestudium sehen), aber ich mag es, deswegen mach ich das so.

### 1.
$$
\begin{align*}
t &\colonequals 12 \text{ s} \\
v_0 &\colonequals 0 \frac{\text{km}}{\text h} \\
\Delta v &\colonequals 100 \frac{\text{km}}{\text h} \\
&= \frac{250}{9} \frac{\text m}{\text s} \\
\rightarrow a &= \frac{250}{9 \cdot 12} \frac{\text m}{\text s^2} \\
&\approx 2,3 \frac{\text m}{\text s^2} \\
\end{align*}
$$

$$
\begin{align*}
s &= \frac a2t^2 + v_0t \\
&\approx \frac{2,3 \frac{\text m}{\text s^2}}{2}\cdot 144 \text{ s}^2 \\
&\approx 170 \text{ m}
\end{align*}
$$

### 2.
$$
\begin{align*}
v_0 &\colonequals 54 \frac{\text{km}}{\text h} \\
&= 15 \frac{\text m}{\text s} \\
a &\colonequals -5 \frac{\text m}{\text s^2}
\end{align*}
$$

#### a.
$$
\begin{align*}
v &= v_0 + at \\
30 \frac{\text{km}}{\text h} \approx 8,3 \frac{\text m}{\text s} &= 15 \frac{\text m}{\text s} - 5 \frac{\text m}{\text s^2} \cdot t \\
\rightarrow t &\approx 1,3 \text{ s}
\end{align*}
$$

#### b.
Keine Ahnung, ob da der Bremsweg bis auf die Geschwindigkeit aus **a.** gemeint ist oder der bei der Bremsung auf $0 \frac{\text m}{\text s}$, deswegen mach ich einfach mal Beides.

**Fall 1: Bremsung auf $ 30 \frac{\text{km}}{\text h} $**
$$
\begin{align*}
\Delta v &= 54 \frac{\text{km}}{\text h} - 30 \frac{\text{km}}{\text h} \\
&= \sqrt{\left|2as\right|} \\
\rightarrow \left( 24 \frac{\text{km}}{\text h} \right)^2 &= \left|2\cdot \left( -5 \frac{\text m}{\text s} \right) \cdot s\right| \\
&= 10 \frac{\text m}{\text s} \cdot s \\
\Rightarrow s &\approx 4,4 \text{ m}
\end{align*}~~~~
\begin{matrix}
~\\
\text{(Die Betragsstriche sind da, weil die }\\
\text{Beschl. negativ ist, die Differenz in} \\
\text{Geschw. aber positiv sein soll)} \\
~\\
\text{(\textbf{Wichtig}: Einheiten umrechnen} \\
\text{nicht vergessen!)}
\end{matrix}
$$

**Fall 2: Bremsung auf $ 0 \frac{\text{km}}{\text h} $**
$$
\begin{align*}
\Delta v &= 54 \frac{\text{km}}{\text h}\\
&= \sqrt{\left|2as\right|} \\
\rightarrow \left( 54 \frac{\text{km}}{\text h} \right)^2 &= \left|2\cdot \left( -5 \frac{\text m}{\text s} \right) \cdot s\right| \\
&= 10 \frac{\text m}{\text s} \cdot s \\
\Rightarrow s &\approx 22,5 \text{ m}
\end{align*}
$$

### 3.
$$
\begin{align*}
v &\colonequals 120 \frac{\text{km}}{\text h} \\
&\approx 33 \frac{\text m}{\text s} \\
s &\colonequals 50 \text{ m} \\
t_r &\colonequals 0,2 \text{ s} \\
a &\colonequals 5 \frac{\text m}{\text s^2} \\
\end{align*}
$$

**WICHTIG:** Die Beschleunigung *bremst hier das Fahrzeug ab*, auch wenn sie positiv ist. Ich habe bloß die Werte in der Aufgabe abgeschrieben, wollte das bloß nochmal anmerken, weil das in der Aufgabe davor ja mit einer negativen Beschleunigung gekennzeichnet wurde.

$$
\begin{align*}
s_b &-~ \text{Bremsweg nach Abwarten}\\
&~~~~~~\text{der Reaktionszeit} \\
s_b &= s-v\cdot t_r \\
&\approx 50 \text{ m} - 33 \frac{\text m}{\text s} \cdot 0,2 \text{ s} \\
&\approx 43 \text{ m}
\\~\\
v_e &= v - \sqrt{2as_b} \\
&\approx 33 \frac{\text m}{\text s} - \sqrt{2\cdot 5 \frac{\text m}{\text s^2} \cdot 43 \text{ m}} \\
&\approx 13 \frac{\text m}{\text s} \\
&\approx 45 \frac{\text{km}}{\text h}
\end{align*}
$$

$$
\begin{align*}
v_\text{max} &\colonequals 100 \frac{\text{km}}{\text h} \\
v_e &< v_\text{max} \\
\rightarrow ~~&\text{Die Radarfalle schnappt} \\
&\text{nicht zu}
\end{align*}
$$

### 4.
$$
\begin{align*}
v &\colonequals 108 \frac{\text{km}}{\text h} \\
&= 30 \frac{\text m}{\text s} \\
a &\colonequals 6 \frac{\text m}{\text s^2} \\
t &\colonequals 2 \text{ s}
\end{align*}
$$

$$
\begin{align*}
v_e &= v - at \\
&= 30 \frac{\text m}{\text s} - 6 \frac{\text m}{\text s^2} \cdot 2 \text{ s} \\
&= 18 \frac{\text m}{\text s} \\
&= 64,8 \frac{\text{km}}{\text h}
\end{align*}
$$

Das Auto wäre mit einer Geschwindigkeit von $64,8 \frac{\text{km}}{\text h}$ auf den ruhenden Fußgänger gefahren.

### 5.
$$
\begin{align*}
v &\colonequals 80 \frac{\text{km}}{\text h} \\
&\approx 22 \frac{\text m}{\text s} \\
s &\colonequals 65 \text{ m} \\
t_r &\colonequals 0,8 \text{ s} \\
a &\colonequals -6 \frac{\text m}{\text s^2} \\
\end{align*}
$$

$$
\begin{align*}
s_b &= s - v \cdot t_r \\
&\approx 65 \text{ m} - 22 \frac{\text m}{\text s} \cdot 0,8 \text{ s} \\
&\approx 47 \text{ m}
\\~\\
\Delta v &= \sqrt{\left|2as_b\right|} \\
&\approx \sqrt{2\cdot 6 \frac{\text m}{\text s^2} \cdot 47 \text{ m}} \\
&\approx 24 \frac{\text m}{\text s} \\
&\approx 86 \frac{\text{km}}{\text h} \\
&> v \\
\rightarrow~~&\text{Das Fahrzeug kommt recht-} \\
&\text{zeitig zum Stillstand}
\end{align*}
$$

```vega-lite
{
    "hconcat": [
        {
            "data": {
                "sequence": {
                "start": 0,
                "stop": 8,
                "step": 0.1,
                "as": "t"
                }
            },
            "transform": [
                {"calculate": "if(datum.t>0.8, 80-(6*(datum.t-0.8))*3.6, 80)", "as": "v"},
                {"filter": "datum.v>=0"}
            ],
            "mark": "line",
            "encoding": {
                "x": {"field": "t", "type": "quantitative", "title": "t in s"},
                "y": {"field": "v", "type": "quantitative", "title": "v in km/h"}
            }
        },
        {
            "data": {
                "sequence": {
                "start": 0,
                "stop": 8,
                "step": 0.1,
                "as": "t"
                }
            },
            "transform": [
                {"calculate": "if(datum.t>0.8, 80*datum.t-3*3.6*(datum.t-0.8)*(datum.t-0.8), 80*datum.t)", "as": "s"},
                {"calculate": "if(datum.t>0.8, 80-(6*(datum.t-0.8))*3.6, 80)", "as": "v"},
                {"filter": "datum.v>=0"}
            ],
            "mark": "line",
            "encoding": {
                "x": {"field": "t", "type": "quantitative", "title": "t in s"},
                "y": {"field": "s", "type": "quantitative", "title": "s in m"}
            }
        }
    ]
}
```