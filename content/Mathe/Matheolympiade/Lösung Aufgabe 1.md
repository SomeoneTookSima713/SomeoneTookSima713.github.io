Für diese Aufgabe lassen sich alle sechsstelligen Zahlen $n \in [100000;999999] \in \mathbb N$ in Tupel aus vier Zahlen $(a, b, c, d)$ aufteilen, wobei $a, b \in [1;9] \in \mathbb N;~ c = a + b + 1 \in Z_2;~ d = a + b \in Z_2$. Die Zahlen $a$ und $b$ sind hierbei die ersten beiden Ziffern der Zahl und $c$ sowie $d$ das mittlere sowie letzte Paar an Ziffern. Dadurch lässt sich also auch aussagen, dass $d + c\cdot 100 + b \cdot 10000 + a \cdot 100000 = n$.

Die Menge $Z_2$ sei definiert als die Menge aller zweistelligen Zahlen, die nicht die Ziffer $0$ enthalten: $Z_2 \colonequals \left\{ n \middle| n \in [1;99] \in \mathbb N,\, n \text{ mod } 10 \neq 0 \right\}$ (der Ausdruck $a \text{ mod } b$ ist der Modulo-Operator und entspricht dem Rest der ganzzahligen Division von $a$ durch $b$).

Nun soll die Anzahl an Tupeln $(a, b, c, d)$ ermittelt werden, die die obigen Bedingungen erfüllen.

Die maximale Anzahl an Tupeln ergibt sich aus der Anzahl an Kombinationen an Werten für $a$ und $b$. Da beide Variablen einem von neun Werten entsprechen können, lässt sich diese Anzahl an Kombinationen mithilfe einer simplen Multiplikation ausrechnen: $9 \cdot 9 = 81$.

Diese Anzahl an Kombinationen reduziert sich jedoch durch die Bedingung, dass die Ziffer $0$ nicht in der sechsstelligen Zahl, und damit auch nicht in einer der Zahlen des Tupels, vorkommen darf.

Da $c = a + b + 1$, darf also der Ausdruck $a + b + 1$ keine Zahl mit der Ziffer 0 ergeben. Die Summe $a + b + 1$ liegt im ganzzahligen Intervall von $3$ ($a = b = 1$) bis $19$ ($a = b = 9$), demnach werden durch diese Voraussetzung nur die Fälle ausgeschlossen, in denen $a + b + 1 = 10$, da das der einzige Wert im Intervall ist, der die Ziffer $0$ enthält. Daraus lässt sich schließen, dass $a + b \neq 9$ gilt, wodurch die folgenden Werte für $a$ und $b$ ausgeschlossen werden:

$
\begin{array}{|r|c|c|c|c|c|c|c|c|}
\hline
a & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\[0.5pt]
\hline
b & 8 & 7 & 6 & 5 & 4 & 3 & 2 & 1 \\[0.5pt]
\hline
\end{array}
$

Da $d = a + b$, darf also der Ausdruck $a + b$ keine Zahl mit der Ziffer 0 ergeben. Über ähnliches Vorgehen wie für den Wert von $c$ lässt sich schließen, dass $a + b \neq 10$ gelten muss, wodurch folgende Fälle für die Werte von $a$ und $b$ ausgeschlossen werden:

$
\begin{array}{|r|c|c|c|c|c|c|c|c|c|}
\hline
a & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\[0.5pt]
\hline
b & 9 & 8 & 7 & 6 & 5 & 4 & 3 & 2 & 1 \\[0.5pt]
\hline
\end{array}
$

Die insgesamte Anzahl an Tupeln, die die anfangs genannten Bedingungen erfüllen, lässt sich also ausrechnen, indem von der maximalen Anzahl $81$ die Zahl der ausgeschlossenen Fälle subtrahiert wird. Durch den Wert von $c$ werden $8$ Fälle ausgeschlossen, durch den Wert von $b$ weitere $9$. 

Demnach ist die gesuchte Anzahl an Tupeln $81 - 8 - 9 = 64$.

Da die Tupel direkt von den ursprünglich gesuchten sechsstelligen Zahlen abgeleitet wurden, lässt sich auch aussagen, dass die Anzahl an sechsstelligen Zahlen, die die in der Aufgabenstellung genannten Bedingungen erfüllen, $64$ beträgt.