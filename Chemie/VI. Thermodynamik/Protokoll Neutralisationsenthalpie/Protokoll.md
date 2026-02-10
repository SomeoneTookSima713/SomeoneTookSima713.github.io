## Kalorimetrische Bestimmung einer Neutralisationsenthalpie

### Geräte
* Temperaturmessgerät
* mit Styropor isoliertes Becherglas

### Chemikalien
* Base in wässriger Lösung (Natriumhydroxid, 20ml)
* Säure in wässriger Lösung (..., 20ml)

### Versuchsaufbau
`Bild einfügen`

### Durchführung
* Lösungen von Säure und Base auf gleiche Temperatur setzen
* Säure oder Base in das isolierte Becherglas füllen
* Temperaturmessgerät in das Becherglas halten und anfangen zu messen
* andere Lösung in das Becherglas füllen
* weiterhin die Temperatur messen, bis zum Ende der Neutralisationsreaktion

### Beobachtung
`Temperatur-Zeit-Diagramm einfügen`

Zeitpunkt $t$ in $\text{s}$|Temperatur $T$ in $^\circ\text{C}$
-|-

### Auswertung
* `Reaktionsgleichung`
* Starttemperatur: $T_0 = \dots$
* Maximaltemperatur: $T_1 = \dots$

Die Temperaturdifferenz $\Delta T$ lässt sich einfach berechnen:
$$
\begin{align*}
\Delta T &= T_1 - T_0 \\
&= \dots
\end{align*}
$$

Mithilfe dieser lässt sich die Reaktionswärme $Q$ berechnen:

$$
\begin{align*}
Q &= -\Delta T \cdot c_p \cdot m \\
&= -\Delta T \cdot c_p \cdot V \cdot \varrho
\end{align*}
$$

Es lässt sich davon ausgehen, dass die Lösung zum Großteil aus Wasser besteht, demnach lassen sich für die spezifische Wärmekapazität $c_p$ und für die Dichte $\varrho$ die Werte von Wasser einsetzen. Das Volumen entspricht der Summe der Volumina von Säure- und Baselösung:

$$
\begin{align*}
Q &= -\Delta T \cdot c_p(\ce{H2O}) \cdot V \cdot \varrho(\ce{H2O}) \\
&= \dots \\
&= \dots \text{ J}
\end{align*}
$$

Da die Neutralisationsreaktion der beiden Lösungen sowohl unter konstantem Druck als auch unter gleichbleibendem Volumen abläuft, entspricht die obige Reaktionswärme gleichzeitig der Änderung der Reaktionsenthalpie und damit der Neutralisationsenthalpie $\Delta H_N$. Dies ergibt sich aus der folgenden Rechnung:

$$
\begin{align*}
H_P &\dots \text{Enthalpie der Reaktionsprodukte} \\
H_E &\dots \text{Enthalpie der Reaktionsedukte} \\
\end{align*}
$$

$$
\begin{align*}
\Delta H_N &= H_P - H_E \\
&= U_P + p_PV_P - U_E - p_EV_E &|&~p_PV_P = p_EV_E \\
&= U_P - U_E \\
&= \Delta U \\
&= Q + W &|&~\Delta V = 0 ~\rightarrow W = 0 \\
&= Q \\
\Rightarrow \Delta H_N &= \dots \text{ J}
\end{align*}
$$

Nun lässt sich noch die molare Neutralisationsenthalpie $\Delta H_{Nm}$ bestimmen. Hierfür teilt man die Neutralisationsenthalpie durch die größte Stöchiometriezahl der Ausgangsstoffe der Reaktion $n_F$.

`Hier muss man noch begründen und rausfinden, welchen Wert n_F wirklich hat`

$$
\begin{align*}
\Delta H_{Nm} &= \frac{\Delta H_N}{n_F} \\
&= \frac{\Delta H_N}{n(\text{Was auch immer die Säure dann ist})} \\
&= \dots \\
\Rightarrow \Delta H_{Nm} &= \dots \frac{\text J}{\text{mol}}
\end{align*}
$$

### Fehlerbetrachtung
Der errechnete Wert für die Neutralisationsenthalpie und die molare Neutralisationsenthalpie kann aus verschiedenen Gründen vom reellen Wert abweichen. Zum Beispiel entsteht eine gewisse Ungenauigkeit bereits durch Messunsicherheiten. Außerdem ist das Becherglas nicht perfekt isoliert, was einen gewissen Messfehler erzeugt. Zudem wurde für die Säure- und Baselösung die spezifische Wärmekapazität und Dichte von Wasser angenommen – durch die gelösten Stoffe weicht der echte Wert beider Größen allerdings ein wenig von denen von Wasser ab. Weitere Fehlerquellen können außerdem Abweichungen vom angenommenen Volumen und der angenommenen Konzentration der Säure- bzw. Baselösung sein.