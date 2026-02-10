# I. Differentialrechnung

---

## Wiederholung: Funktionen und Funktionsarten

> #### Definition Funktion
> Eine Funktion ist eine eindeutige Zuordnung.
> $y = f(x)$, d.h. $y$ ist eine *Funktion von $x$*, also wird jedem $x$ genau ein $y$ zugeordnet.
> 
> $
> \begin{array}{lll}
> x & \dots & \text{Argument, Stelle} \\
> y \text{ bzw. } f(x) & \dots & \text{Wert} \\
> P(x ~|~ y) &\dots& \text{Punkt}
> \end{array}
> $

> #### Definition Definitionsbereich
> Der Definitionsbereich $D_f$ ist die Menge aller $x$-Werte, die in $f(x)$ eingesetzt werden dürfen, für die $f(x)$ also definiert ist.
> 
> Bsp: $f(x) = \frac1{x+2}$
> $
\begin{array}{l}
D: x\in\mathbb{R}; x \neq -2 \\
D = \left\{x | x\in\mathbb{R}; x \neq -2\right\} \\
D: \mathbb{R} ~\backslash~ \{-2\}
\end{array}
$

> #### Definition Wertebereich
> Der Wertebereich $W_f$ ist die Menge aller Funktionswerte, die $f(x)$ annehmen kann.
> 
> Bsp: $f(x) = \frac1{x+2}$
> $W_f = \mathbb{R} ~\backslash~ \{0\}$

Der Graph von $f$ ist die Menge aller Punkte $P(x~|~y)$, deren Koordinaten die Gleichung $f(x) = y$ erfüllen.

#### Aufgabe: $f(x) = x^2 - 2$
$D_f = \mathbb R$
$W_f: y \in \mathbb R; y\geq-2$
Scheitelpunkt: $S(0 ~|~ -2)$
Graph: 
```vega-lite
{
  "data": {
    "sequence": {
      "start": -4,
      "stop": 4,
      "step": 0.1,
      "as": "x"
    }
  },
  "transform": [
    {"calculate": "datum.x*datum.x-2", "as": "y"}
  ],
  "mark": "line",
  "encoding": {
    "x": {"field": "x", "type": "quantitative"},
    "y": {"field": "y", "type": "quantitative"}
  }
}
```
Monotonie:
$
\begin{array}{llll}
\text{monoton fallend für alle } & x \leq 0 \\
\text{monoton steigend für alle } & x \geq 0 \\
\end{array}$

### Übung: Funktionen

Definition "Funktion": Eine Funktion ist eien *eindeutige* Zuordnung, bei der jedem Wert einer Ausgangsmenge genau ein Wert einer Zielmenge *zugeordnet* wird.

Funktionsart|Allgemeine Funktionsvorschrift|Beispiel|Anzahl Nullstellen
-|-|-|-
Lineare Funktion|$y=mx+n$|Bsp: $y=2x+1$|1 Nullstelle $\\$ Ausnahme: konstante Funktionen $\\$ $y=k \text{ mit } k\in\mathbb R ~\backslash~ \{0\}$ $\\$ $y=0$: unendlich viele Nullstellen
Quadratische Funktionen|allgemeine Form: $y=ax^2 + bx + c$ $\\$ Scheitelpunktform: $y=(x+d)^2+e$| $\dots$ | Besitzt 0, 1 oder 2 Nullstellen. $\\$ Normalform: $0 = x^2 + px + q$ $\\$ p-q-Formel: $\\$ $x_{1,2} = -\frac p2 \pm \sqrt{(\frac p2)^2 - q}$ $\\$ 2 NST, wenn $(\frac p2)^2 - q > 0$ $\\$ 1 NST, wenn $(\frac p2)^2 - q = 0$ $\\$ 0 NST, wenn $(\frac p2)^2 - q < 0$
Potenz-funktionen mit $n\inßmathbb N$| $y=x^n, n\in\mathbb N$|Bsp.: $y=x^3$ <iframe src="https://www.desmos.com/calculator/cmnivptaou?embed" width="200" height="200" style="border: 1px solid #ccc" frameborder=0></iframe>| Nullstelle: $x_0 = 0$
Wurzel-funktion|$y=\sqrt[n]x, n\in\mathbb N$|Bsp.: y = \sqrt x<iframe src="https://www.desmos.com/calculator/kmu4ztirml?embed" width="200" height="200" style="border: 1px solid #ccc" frameborder=0></iframe>|Nullstelle: $x_0 = 0$ $\\$ DB: $x\in\mathbb R; x\neq0$ $\\$ WB: $y\in\mathbb R; y\neq 0$
Potenz-funktionen mit $n\in\mathbb Z, n<0$|$y=x^n, n\in\mathbb Z, n<0$|**1. Fall: $n$ ungerade** $\\$ Bsp.: $y=x^{-1}$<iframe src="https://www.desmos.com/calculator/bb75mq5p48?embed" width="200" height="200" style="border: 1px solid #ccc" frameborder=0></iframe>$\\$ **2. Fall: $n$ gerade** $\\$ Bsp.: $y = x^{-2}$<iframe src="https://www.desmos.com/calculator/zgxzqdvupt?embed" width="200" height="200" style="border: 1px solid #ccc" frameborder=0></iframe>|keine Nullstelle $\\$ DB: $x\in\mathbb R; x\neq0$ $\\$ WB: $y\in\mathbb R; y>0$
Trigono-metrische Funktionen|\dots|\dots|unendlich viele Nullstellen: $\\$ $y=\sin x ~~\rightarrow~~ x_0 = k\pi, k\in\mathbb Z$