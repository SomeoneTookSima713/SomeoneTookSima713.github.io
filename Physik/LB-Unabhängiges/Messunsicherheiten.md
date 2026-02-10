```latex {cmd=true hide latex_zoom=5}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\color{white}
\begin{document}
Kinematik
\\
\end{document}
```
---

# Messunsicherheiten bei Experimenten

Wenn man ein physikalisches Experiment macht, erhält man Messwerte, die vom *wahren Wert der Größe* abweichen. Man hat also stets Abweichungen vom wahren Wert (den nur der liebe Gott kennt).

Jede Messung kann leider nicht beliebig genau erfolgen und stößt aufgrund des Messgerätes oder anderen Einflüssen an seine Grenzen. Diese Unsicherheiten in der Messung lassen sich jedoch abschätzen, so dass immerhin ein Intervall für eine Messgröße angeben lässt.

#### Beispiel
In einem Experiment zum freien fall lässt ein Experimentator einen Körper aus $\displaystyle 2 \text{ m} $ fallen und misst die Zeit.

Die gemssene Zeit beträgt:
$$ t = (0,6 \pm 0,1) \text{ s} $$

Der wahre Wert der Fallzeit bleibt uns nicht zugänglich. Wir wissen aber, dass der wahre Wert im Intervall liegt
$$ 0,5 \text{ s} \leq t \leq 0,7 \text{ s} $$

Durch eine andere Wahl der Messgeräte oder des Aufbaus könnte diese Messung aber auch lauten:
$$ t = (0,62 \pm 0,05) \text{ s} $$ oder sogar $$ t = (0,632 \pm 0,010) \text{ s} $$

**Beachte:**
Die Angabe des Messwertes und der Unsicherheit besitzt die gleiche Anzahl an Nachkommastellen.

Bei Rundungen (der Unsicherheit) wird immer zur nächst-größeren Zahl gerundet. Sonst könnte man durch Rundung die Unsicherheit verkleinern und Genauigkeit vortäuschen.

### Anwendung am Beispiel

Die Kantenlänge eines Notizblock-Blattes wird gemessen. Dabei erhält man die Längen:
|$l$ in $\text{mm}$|
|-|
|$ 96,5 $|
|$ 97,5 $|
|$ 97,0 $|
|$ 97,0 $|
|$ 96,5 $|

Die gemessene Länge schwankt zufällig. Ursache hierfür könnte z.B. das Anlegen des Lineals an die Blattkante sein. Ebenso wird gern geschätzt, sobald der Messwert zwischen zwei Skalenstrichen liegt.

Welchen Messwert nehmen wir nun?
$$ \overline l = \frac{96,5 + 97,5 + 97,0 + 97,0 + 96,5}{5} \text{ mm} = 96,9 \text{ mm} $$

Und die Unsicherheit?
$$ \sigma_{\text{emp}} = \sqrt{\frac1n\sum_{i=1}^{n} (x_i-\overline x)^2} $$

## Grobe Fehler

Grobe Fehler sind Fehler, die aufgrund eines falschen Aufbaus, ungeeigneter Messgeräte, falschen Ablesens, defekter Messgeräte oder der Dummheit der Schüler auftreten. Grobe Fehler sind grundsätzlich vermeidbar und sollten in der Fehlerbetrachtung **nicht berücksichtigt** werden. Tritt ein grober Fehler auf, so sind die entsprechenden Werte zu streichen und die Messungen zu wiederholen.

## Systematische und zufällige Unsicherheiten und Messabweichungen

Systematische Unsicherheiten sind Abweichungen, die vor allem durch die Experimentieranordnung oder durch die Messgeräte verursacht werden, aber auch vom Experimentator selbst hervorgerufen werdne können. Sie treten, wie schon der Name sagt, nicht zufällig auf, sondern sind durch dei Art und Weise der Messungen bestimmt und wirken sich auch meist in gleicher Weise aus, wenn die messungen emhrmals durchgeführt werden.

*Systematische Fehler können teilweise erfasst und korrigiert werden.*

**Das "System" ist an sich unvollkommen und trägt damit durch die Wahl der Methode und der Messgeräte eine Unsicherheit mit sich.**

#### $~$

Zufällige Unsicherheiten sind Fehler, die vor allem durch den Experimentator und durch Umwelteinflüsse zustande kommen. Dazu gehören z.B. Ablesefehler bei Messgeräten, Ablegesefehler bei Zeitmessungen, ungenaues Einstellen der Schärfe eines Bildes in der Optik.

*Solche zufälligen Fehler lassen sich teilweise abschätzen, aber nie vollständig erfassen. Zufällige Fehler haben statistischen Charakter. Bei mehrfacher Messung lassen sich Mittelwert und Standardabweichung angeben.*

## Fazit

Jede Messung ist prinzipiell mit Unsicherheiten behaftet, d.h. der Messwert weicht um einen unbekannten Betrag vom unbekannten wahren Wert der Messgröße ab.

Bei Messungen können sowohl systematische als auch zufällige abweichungen auftreten.

## Weitere Ursachen
Siehe PowerPoint auf Lernsax

## Angabe der Messunsicherheit

### Absolute Messunsicherheit
Angabe in absoluten Zahlen (Beispiel: Messfehler der Spannung)
$$ \Delta U = 0,1 \text{ V} $$

Die Angabe des Messwertes könnte dann so lauten:
$$ U = (5,0 \pm 0,1) \text{ V} $$

"Aufgrund der Messunsicherheit kann man eine Spannung zwischen 4,9 und 5,1 Volt annehmen."

### Relative Messunsicherheit
Angabe des Messfehlers in Prozent (bzw. als Dezimalbruch)
$$ \frac{\Delta U}{U} = \frac{0,1 \text{ V}}{5,0 \text{ V}} = 0,02 = 2\% $$

Die Angabe des Messwertes könnte dann so lauten:
$$ U = (5,0 \pm 2\%) \text{ V} $$

"Aufgrund der Messunsicherheit muss man bei der Spannungsmessung 2 Prozent Messunsicherheit akzeptieren."

## Fehlerfortpflanzung
### Summen und Differenzen
**Aufgabe**
Messt eure Schuhlänge und schreitet anschließend 20 "Kaffeebohnen". Schätz vorher, welche Strecke ihr abschreiten werdet und messt im Anschluss nach.

$\displaystyle l = 28,6 \text{ cm} $
$\displaystyle 20l = 5,72 \text{ m} $
$\displaystyle \Delta l_\text{Rechnung} = 1 \text{ cm} $
$\displaystyle s = 5,79 \text{ m} $
$\displaystyle \Delta l_\text{Gemessen} = 0,35 \text{ cm} $

**Absolute Unsicherheiten werden bei Summen und Differenzen stets addiert.**

### Produkte und Quotienten
**Beispiel**
In welchem Bereich liegen die Werte des Widerstands, wenn man folgende Messwerte gemessen hat?
$$
\begin{align*}
U &= (5,0 \pm 0,1) \text{ V} \\
I &= (20 \pm 1) \text{ mA} \\
R &= \frac UI \\
\end{align*}
$$

**Technik 1**: Abschätzung über die Intervallgrenzen
$$
\begin{align*}
\frac{4,9 \text{ V}}{0,021 \text{ A}} \approx 233 ~\Omega < ~&R < \frac{5,1 \text{ V}}{0,019 \text{ A}} \approx 269 ~\Omega
\end{align*}
$$

**Technik 2**: Relative Messunsicherheiten addieren
$$
\begin{align*}
\frac{\Delta U}{U} &= 2 \% \\
\frac{\Delta I}{I} &= 5 \% \\
R &= \frac{5,0 \text{ V}}{0,02 \text{ A}} \\
&= 250 ~\Omega \\
\frac{\Delta R}{R} &= \frac{\Delta U}{U} + \frac{\Delta I}{I} \\
&= 7\% \\
\rightarrow \Delta R &= 250 ~\Omega \cdot 0,07 \\
&= 17,5 ~\Omega \\
\Rightarrow R &= (250 \pm 18) ~\Omega
\end{align*}
$$

### Potenzen
Relative Messunsicherheiten werden mit der Potenz multipliziert, weil einfach mehrfache Multiplizierung.

---

> ---
> 
> #### Fehlermessung Beispiel aus der Klausur
> |$~$|$h$|$t$
> |-|-|-|
> |Messwert             |$2,00 \text{ m}$|$0,65 \text{ s}$|
> |systematischer Fehler|$0,005 \text{ m}\\$(Maßband)|$0,01 \text{ s}\\$(1 digit)|
> |zufälliger Fehler    |$-$|$0,02 \text{ s}\\$(Standardabweichung)|
> |Gesamtfehler         |$0,005 \text{ m}$|$0,03 \text{ s}$|
> |rel. Gesamtfehler    |$0,25\%$|$4,62\%$|
> 
> Fehlerfortpflanzung: $\displaystyle g = \frac{2h}{t^2} $
> $\displaystyle \frac{\Delta g}{g} = \frac{\Delta h}{h} + 2\cdot \frac{\Delta t}{t} = 9,49\% $
> Und dann absoluten Fehler $\Delta g$ ausrechnen
> 
> ---