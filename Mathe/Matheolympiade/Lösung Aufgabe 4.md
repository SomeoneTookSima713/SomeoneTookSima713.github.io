### Interpretation der Aufgabenstellung und Definitionen

Aus der Aufgabe lässt sich entnehmen, dass es eine Menge Ritter $R = \{R_1; R_2; R_3; \dots; R_8\}$ gibt und drei dieser Ritter im Saal einquartiert werden müssen, d.h. es lässt sich die Menge $S = \{ R_a; R_b; R_c \}$ bilden, für die $S \subset R$ gilt.

Nun gibt es eine Anzahl $n$ an Paaren von Rittern (jeweils dargestellt als eine Menge $\{R_x; R_y\},\, R_x,R_y \in R$), die nicht zusammen im Saal einquartiert werden dürfen: $\{R_x; R_y\} \not\subset S$. Diese Paare können in einer Menge $N$ zusammengefasst werden.

Der Hauptgegenstand des Problems besteht also darin, anhand der möglichen Kombinationen für den Inhalt der Menge $S$ bei bestimmten Elementzahlen von $N$ bestimmte Aussagen zu zeigen. Hierfür wird die Menge $\Omega_N$ als Menge aller möglichen Inhalte von $S$ bei einem bestimmten Inhalt von $N$ definiert.

Im Fortlaufenden wird außerdem der $\#$-Operator verwendet. Dieser wird definiert als die Anzahl der Elemente einer Menge. Hier einige Beispiele für diesen Operator und seine Funktionsweise:
* $\#\{1; 3; 5\} = 3$
* $\#[1;25] = 25 ~~([1;25] \in \mathbb N)$
* $\#\{x|x\in\mathbb R, x^2 + 4x + 4 = 0\} = 1$

Nun werden zunächst einzelne Fälle von $\Omega_N$ für bestimmte $N$ untersucht, um generelle Aussagen über die Anzahl an Kombinationen von $S$ treffen zu können.

### Untersuchung des Verhaltens von $\Omega_N$ bei bestimmten $N$

Im Fall $N = \empty$ lässt sich die Anzahl der Möglichkeiten für $S$ mit dem Binomialkoeffizienten berechnen: $\# \Omega_N = \#\Omega_\empty = \begin{pmatrix}8\newline 3\end{pmatrix} = \frac{8!}{3!(8-3)!} = 56$.

Für die nächsten Fälle, die betrachtet werden, ist anzumerken, dass konkrete Ritter in den Elementen von $N$ genutzt werden. Diese können prinzipiell durch beliebige andere Ritter ausgetauscht werden, weshalb es genauer wäre, bspw. den generellen Fall $N = \big\{\{R_a; R_b\}\big\},\,a,b\in[1;8]\in\mathbb N$ statt den spezifischen Fall $N = \big\{\{R_1;R_2\}\big\}$ zu betrachten. Zur besseren Veranschaulichung wurde sich jedoch gegen die Betrachtung solcher generellen Fälle entschieden, um das auftretende Verhalten besser erklären zu können.

Wenn $N = \big\{\{R_1; R_2\}\big\}$ lässt sich beobachten, dass sich die Anzahl der Kombinationen $\#\Omega_N$ im Vergleich zum Fall $N = \empty$ um $6$ verringert: Es werden alle möglichen Werte für $S$ ausgeschlossen, die $R_1$ und $R_2$ beinhalten. Wenn man sich alle möglichen Kombinationen aus diesen beiden Rittern und einem beliebigen dritten Ritter anschaut, fällt auf, dass es genau sechs gibt: $\{R_1; R_2; R_3\}$, $\{R_1; R_2; R_4\}$, $\{R_1; R_2; R_5\}$, $\{R_1; R_2; R_6\}$, $\{R_1; R_2; R_7\}$ und $\{R_1; R_2; R_8\}$. Dementsprechend verringert sich die insgesamte Anzahl an Kombinationen um sechs.

In einem weiteren Fall, wenn $N = \big\{\{R_1;R_2\}; \{R_1; R_3\}\big\}$, ist zu bemerken, dass der Menge aus dem letzten Fall lediglich ein weiteres Paar an Rittern hinzugefügt wurde, dass sich ein Element mit dem anderen Paar teilt.

Hier verringert sich $\#\Omega_N$ insgesamt um $11$, also sind durch das zweite Paar in $N$ fünf weitere Werte für $S$ "weggefallen" im Vergleich zum ersten betrachteten Fall. Dies lässt sich einfach begründen: Durch das Paar $\{R_1; R_2\}$ werden die selben Werte für $S$ wie im letzten Fall ausgeschlossen. Durch das zweite Paar $\{R_1; R_3\}$ würden zusätzlich noch sechs weitere Werte ausgeschlossen werden: $\{R_1; R_2; R_3\}$, $\{R_1; R_3; R_4\}$, $\{R_1; R_3; R_5\}$, $\{R_1; R_3; R_6\}$, $\{R_1; R_3; R_7\}$ und $\{R_1; R_3; R_8\}$. Da jedoch die erste dieser Kombinationen schon durch das Paar $\{R_1; R_2\}$ unmöglich ist, darf es nicht erneut berücksichtigt werden. Demnach fallen insgesamt $6+6-1=11$ mögliche Werte für $S$ weg.

Ähnliches lässt sich in einem weiteren Fall erkennen: Wenn $N = \big\{\{R_1;R_2\}; \{R_1; R_3\}; \{X; R_4\}\big\}$, wobei $X$ einer der drei Werte $R_1$, $R_2$ oder $R_3$ ist – zur besseren Veranschaulichung wird $X=R_1$ angenommen –, werden insgesamt $16$ Kombinationen für den Inhalt von $S$ ausgeschlossen: Die selben wie im vorherigen Fall durch $\{R_1; R_2\}$ und $\{R_1; R_3\}$ und vier weitere durch das neu dazugekommene Paar ($\{R_1; R_4; R_5\}$, $\{R_1; R_4; R_6\}$, $\{R_1; R_4; R_7\}$ und $\{R_1; R_4; R_8\}$), wobei zwei der Kombinationen, die schon durch die ersten beiden Paare unmöglich sind, durch das dritte "wegfallen" würden ($\{R_1;R_2;R_4\}$ und $\{R_1;R_3;R_4\}$).

An all diesen Fällen lässt sich ein Muster erkennen, das dem Prinzip von Inklusion und Exklusion der Stochastik ähnelt: Man subtrahiert von der insgesamten Anzahl an Möglichkeiten für $S$ die Anzahl der Möglichkeiten, die durch die Paare einzeln "wegfallen". Danach addiert man erneut die Anzahl der Möglichkeiten, die von jeweils zwei der Paare gleichzeitig ausgeschlossen werden, da man sonst genau diese Möglichkeiten mehrmals ausschließen würde, was logischerweise nicht funktioniert.

Dem Prinzip lässt sich auch entnehmen, dass man danach noch die Anzahl an Überschneidungen von jeweils drei Paaren in den Fällen, die sie ausschließen, wieder subtrahieren muss. Dies lässt sich auch in bestimmten Fällen beobachten, bspw. wenn $N = \big\{\{R_1;R_2\}; \{R_1; R_3\}; \{R_2; R_3\}\big\}$: Es würden durch alle drei Paare jeweils sechs Möglichkeiten für $S$ ausgeschlossen werden, doch die Paare Überschneiden sich jeweils in Möglichkeiten, die durch sie "wegfallen" würden. Hier eine tabellarische Darstellung:
Kombination|Überschneidungen in wegfallenden Werten für $S$
-|-
$\{R_1; R_2\} \cap \{R_1; R_3\}$|$ \{R_1; R_2; R_3\} $
$\{R_1; R_2\} \cap \{R_2; R_3\}$|$ \{R_1; R_2; R_3\} $
$\{R_2; R_3\} \cap \{R_1; R_3\}$|$ \{R_1; R_2; R_3\} $

Wie sich erkennen lässt, überschneiden sich alle Kombinationen an zwei Paaren in jeweils einem möglichen Wert für $S$, den sie ausschließen. Demnach müsste man dafür kompensieren, indem man zu der insgesamten Anzahl an Kombinationen wieder $3$ dazuaddiert. Dann tut sich jedoch in genau diesem Fall ein Problem auf: Man hat dadurch soz. dreimal den Fall $\{R_1; R_2; R_3\}$ ausgeschlossen und auch dreimal dafür kompensiert, was effektiv dafür sorgt, dass dieser Fall noch nicht ausgeschlossen wurde.

Da dieser Fall aber offensichtlich ausgeschlossen werden muss, kann man sich herleiten, dass genau in diesem Fall (wenn sich drei Paare in ein und demselben ausgeschlossenen Wert für $S$ überschneiden und soz. eine Art Dreiecksbeziehung bilden) wieder $1$ von der insgesamten Anzahl an Kombinationen für $S$ subtrahiert werden muss.

Dem Prinzip entsprechend müsste man außerdem noch zusätzlich alle Überschneidungen an Kombinationen für jeweils vier der Paare erneut addieren, für jeweils fünf der Paare wieder subtrahieren usw. Da man aber nie einen möglichen Wert von $S$ finden kann, aus dem man mehr als drei ungleiche Teilmengen von zwei Elementen herausbilden kann (man kann also nie mehr als drei einzigartige Paare an Rittern finden, die alle einen Wert für $S$ ausschließen), muss man für jede Anzahl an Paaren nur die einzelnen Paare, Kombinationen von zwei und von drei Paaren berücksichtigen.

D.h., wenn man eine Funktion $s(P)$ definiert, die jede Menge $P = \{R_a; R_b\}\,,~R_a,\,R_b \in R$ auf eine neue Menge abbildet, die alle möglichen Werte für $S$ beinhält, von denen $P$ eine Teilmenge ist, kann man für alle $N$ eine generelle Formel für den Wert von $\#\Omega_N$ aufstellen:

$$
s: \left\{\begin{array}{l}
\big\{\,\{R_a; R_b\}\,\big|\,R_a,R_b\in R\,\big\} \rightarrow \Omega_\empty \\
P \mapsto \Omega_\empty ~\backslash~ \Omega_{\{P\}}
\end{array}\right.
$$
$$ \#\Omega_N = 56 - \sum_{P\in N} \#s(P) + \sum_{P,\, Q \in N} \#(s(P) \cap s(Q)) - \sum_{P,\, Q,\, R \in N} \#(s(P) \cap s(Q) \cap s(R)) $$

### Vereinfachen der Formel für $\#\Omega_N$

Obwohl sich diese Formel auf alle möglichen $N$ anwenden lässt, um ohne das manuelle Durchgehen durch alle Kombinationen $\#\Omega_N$ zu berechnen, ist sie noch ein wenig sperrig zu benutzten, da sie trotzdem von dem Wissen über die konkreten Elemente in $N$ abhängt. Durch genau dieses Problem lässt sie sich noch nicht praktikabel anwenden um die Teilaufgaben a) und b) zu beantworten. Deshalb wird im Folgenden die Formel weiter vereinfacht und modifiziert, um eine neue Formel für $\#\Omega_N$ aufzustellen, die lediglich von der Anzahl der Elemente in $N$ (also $\#N$ bzw. $n$) abhängt. Zunächst wird die Formel vereinfacht, um sie unabhängig von der Funktion $s(P)$ zu machen.

Hierfür müssen zunächst ein paar Beobachtungen aufgestellt werden. Zuerst lässt sich erkennen, dass für zwei Paare $P = \{R_a; R_b\}$ und $Q = \{R_c; R_d\}$ der Wert von $\#(s(P) \cap s(Q))$ nur entweder $0$ oder $1$ sein kann, dass also die Schnittmenge von $s(P)$ und $s(Q)$ höchstens ein Element beinhalten kann. Dies lässt sich am besten mit zwei konkreten Beispielen zeigen:

Angenommen, $P = \{R_1; R_2\}$ und $Q = \{R_1; R_3\}$ – die Paare teilen sich also ein Element –, lässt sich beobachten, dass $s(P) \cap s(Q) = \big\{\{R_1;R_2;R_3\}\big\}$ und demnach genau ein Element enthält. Da sich zwei Ritter beliebig miteinander vertauschen lassen, ist mit diesem Beispiel schon eine von drei Klassen an Fällen für $\#(s(P) \cap s(Q))$ gezeigt worden. Die zweite Klasse wäre, wenn $P = Q$; da das aber im Kontext unserer Formel für $\#\Omega_N$ voraussetzen würde, dass die Menge $N$ zwei gleiche Elemente enthält, lässt sich diese Klasse an Fällen vernachlässigen.

Die dritte Klasse an Fällen – wenn sich beide Paare kein Element teilen – lässt sich mit dem konkreten Beispiel $P = \{R_1; R_2\}$, $Q = \{R_3; R_4\}$ zeigen: Hier ist $s(P) \cap s(Q) = \empty$, demnach enthält die Schnittmenge keine Elemente.

Aus den obigen Beobachtungen lässt sich nun folgende Aussage für alle $P$ und $Q$ mit $P\neq Q$ aufstellen:
$$
\#(s(P) \cap s(Q)) =
\begin{cases}
1, & \#(P \cup Q) = 3 \\
0, & \#(P \cup Q) = 4
\end{cases}
$$

Diese lässt sich zudem noch in eine simplere Form umformen, da $\#(P \cup Q) = 3$ voraussetzt, dass sich $P$ sowie $Q$ ein Element teilen und $\#(P \cup Q) = 4$ voraussetzt, dass sich $P$ sowie $Q$ kein Element teilen:
$$
\begin{align*}
\#(s(P) \cap s(Q)) &=
\begin{cases}
1, & \#(P \cap Q) = 1 \\
0, & \#(P \cap Q) = 0
\end{cases} \\
\Rightarrow \#(s(P) \cap s(Q)) &= \#(P \cap Q)
\end{align*}
$$

Wenn entsprechend dieser Gleichung unsere Formel umgeformt wird, erhält man nun:
$$
\#\Omega_N = 56 - \sum_{P\in N} \#s(P) + \sum_{P,\, Q \in N} \#(P \cap Q) - \sum_{P,\, Q,\, R \in N} \#(s(P) \cap s(Q) \cap s(R))
$$

Ähnliches lässt sich auch für Kombinationen an drei Paaren erkennen: Die Anzahl an möglichen Werten für $S$, die drei beliebige Paare gleichzeitig ausschließen, kann höchstens $1$ sein. Dieser Fall tritt genau dann ein, wenn sich alle drei Paare genau drei einzigartige Ritter in ihren Werten teilen, da es bei größeren Anzahlen unmöglich ist, einen Wert für $S$ zu finden, der alle vier Ritter enthält (da $S$ immer exakt drei Elemente haben muss).

Da keine der drei Paare exakt gleich sein dürfen, lässt sich schließen, dass diese Anzahl an ausgeschlossenen Fällen genau dann $1$ beträgt, wenn die Paare alle möglichen Wege repräsentieren, aus drei Rittern zwei auszuwählen (und in allen anderen Fällen $0$ beträgt).

Demnach lässt sich in unserer Formel $\#(s(P) \cap s(Q) \cap s(R))$ umformen:
$$
\#(s(P) \cap s(Q) \cap s(R)) = \#(P \cap Q) \cdot \#(P \cap R) \cdot \#(Q \cap R)
$$

Eingesetzt sieht unsere Formel für $\#\Omega_N$ nun so aus:
$$
\#\Omega_N = 56 - \sum_{P\in N} \#s(P) + \sum_{P,\, Q \in N} \#(P \cap Q) - \sum_{P,\, Q,\, R \in N} \#(P \cap Q) \cdot \#(P \cap R) \cdot \#(Q \cap R)
$$

Zuletzt kann noch eine Sache festgestellt werden: Für jedes Paar $P$ gilt $s(P) = 6$ (siehe erster Fall für $N$, der betrachtet wurde). Demnach kann die Formel erneut umgeformt werden, sodass die erste Summe komplett wegfällt:
$$
\#\Omega_N = 56 - 6\#N + \sum_{P,\, Q \in N} \#(P \cap Q) - \sum_{P,\, Q,\, R \in N} \#(P \cap Q) \cdot \#(P \cap R) \cdot \#(Q \cap R)
$$

Nun wurde die Formel für $\#\Omega_N$ in eine Form gebracht, die unabhängig von der Funktion $s$ ist, was die Berechnung vereinfacht. Nun muss die Formel noch in eine Form gebracht werden, die unabhängig von den konkreten Elementen von $N$ bei einem bestimmten Wert für $n$ ist.

Um dies zu erreichen, muss zunächst eine eindeutige Abbildung von einem beliebigen Wert $n$ auf eine Menge $N$, soz. eine Funktion $N(n)$, aufgestellt werden.

### Aufstellen einer Formel $\#\Omega_{N~\text{min}}(n)$

Da zu zeigen ist, dass es für $n\leq11$ für jeden Wert von $N$ mindestens einen möglichen Wert von $S$ gibt, sollte die Funktion $N(n)$ jeden Wert für $n$ auf den Wert für $N$ abbilden, für den es die wenigsten möglichen Werte für $S$ gibt, es soll also $\#\Omega_N$ minimal sein.

Hierfür muss nun eine Strategie aufgestellt werden, um für jedes $n$ den optimalen Wert für $N$ zu finden. Da das eine recht abstrakte Aufgabe ist, wird jedoch stattdessen eine Strategie aufgestellt, um einer beliebigen Menge $N$ ein weiteres Paar hinzuzufügen, um $\#\Omega_N$ um den maximal möglichen Wert zu reduzieren, es wird soz. für jedes $N(n-1)$ ein optimales Paar gefunden, um $N(n)$ zu bilden.

Wenn man zunächst von $n=0$ und damit einer leeren Menge $N$ ausgeht, kann man jedes beliebige Paar hinzufügen, da jedes Paar $\#\Omega_N$ um denselben Wert, $6$, reduziert (in der obigen Formel für $\#\Omega_N$ lassen sich die Summen wegkürzen, da sie jeweils mindestens zwei bzw. drei Elemente in $N$ voraussetzen; für $n=1$ gilt dadurch $\#\Omega_N = 56-6\cdot1 = 50$).

Wenn man nun zu einer Menge $N$ mit $n=1$ ein weiteres Paar hinzufügen will, muss die erste der beiden Summen in der Formel für $\#\Omega_N$ beachtet werden: Wenn beide Paare ein Element gemeinsam haben, reduziert sich $\#\Omega_N$ um $5$, wenn sie aber kein Element gemeinsam haben um $6$. Demnach muss das nächste Paar kein Element mit dem schon bestehenden gemeinsam haben.

Dieselbe Strategie lässt sich auch für die nächsten zwei Paare verfolgen, ab dem fünften ist es jedoch nicht mehr möglich, ein Paar zu finden, das kein Element mit einem anderen Paar gemeinsam hat. Da die vier bestehenden Paare bereits alle unterschiedlichen Ritter enthalten, kann nun nur noch ein Paar gefunden werden, das jeweils eines seiner Elemente mit einem anderen Paar teilt. Demnach wird durch die erste Summe der Wert, um den sich $\#\Omega_N$ durch das neue Paar verringert, von $6$ auf $4$ reduziert.

Dies gelingt auch für drei weitere Paare. Wichtig ist hier jedoch zu beachten, wie man die Paare wählt, da sonst die nächsten vier Paare nicht mehr optimal gewählt werden können: Man muss jeweils zwei der vier ersten Paare auswählen und beide noch nicht vorhandenen Möglichkeiten, zwei der vier in den Paaren vorkommenden Ritter auszuwählen, als die neuen Paare aufstellen. Wird dies nicht befolgt, bleiben mehr mögliche Werte für $S$ übrig, als unbedingt nötig, es wurden also nicht die optimalen Paare für die Minimierung von $\#\Omega_N$ gefunden. Eine Veranschaulichung dieses Auswahlprinzips folgt im Beispiel weiter unten.

Danach lassen sich jedoch nur noch Paare finden, die jedes ihrer Elemente mit jeweils zwei anderen Paaren teilen (hiervon lassen sich auch vier neue finden). Demnach wird für jedes neue dieser Paare $\#\Omega_N$ um $4$ verringert: Der Wert, um den es verringert wird, vermindert sich durch die Gemeinsamkeiten mit insg. vier anderen Paaren von $6$ auf $2$, erhöht sich aber durch die zweite Summe in der Formel wieder auf $4$, da jedes neue Paar mit seinen Überschneidungen insgesamt zwei Dreiecksbeziehungen bildet.

Da für die Beantwortung der Teilaufgaben a) und b) lediglich Werte für $n$ bis $12$ berücksichtigt werden müssen, muss hier die Strategie nicht weitergeführt werden. Zur zusammenfassung:
* die ersten vier Paare enthalten alle acht möglichen Ritter; jedes dieser Paare verringert $\#\Omega_N$ jeweils um $6$
* die nächsten vier Paare teilen sich jedes ihrer Elemente mit jeweils einem anderen Paar und jeweils zwei der neuen Paare haben mit denselben zwei schon bestehenden Paaren Elemente geneimsam; jedes dieser Paare verringert $\#\Omega_N$ um $4$
* die letzten vier Paare teilen sich jedes ihrer Elemente mit jeweils zwei anderen Paaren und bilden mit diesen Paaren insgesamt zwei Dreiecksbeziehungen; jedes dieser Paare verringert $\#\Omega_N$ um $4$

Es folgt ein Beispiel mit konkreten Paaren für die soeben beschriebene Strategie:

Die ersten vier Paare müssen alle acht Ritter enthalten, hierfür wurden folgende gewählt: $\{R_1; R_2\}$, $\{R_3; R_4\}$, $\{R_5; R_6\}$ und $\{R_7; R_8\}$.

Die nächsten vier Paare enthalten jeweils aus zwei schon bestehenden Paaren einen Ritter. Wichtig ist hier zu beachten, dass jeweils zwei neue Paare aus denselben zwei schon bestehenden Paaren Ritter enthalten müssen. Werden hierfür folgende Paare gewählt: $\{R_1; R_4\}$, $\{R_2; R_3\}$, $\{R_5; R_8\}$ und $\{R_6; R_7\}$.

Die letzten vier Paare teilen sich mit jeweils zwei bestehenden Paaren eines ihrer Elemente (das gilt für beide Elemente jedes neuen Paares). Wichtig ist hier darauf zu achten, dass jedes neue Paar jeweils zwei Dreiecksbeziehungen mit bestehenden Paaren eingeht. Hier können zum Beispiel die Paare $\{R_1; R_3\}$, $\{R_2; R_4\}$, $\{R_5; R_7\}$ und $\{R_6; R_8\}$ genutzt werden.

Hier nochmal eine schematische Darstellung, um die Zusammenhänge zwischen den Paaren besser zu verstehen (die Zahlen eins bis acht stehen für die Ritter $R_1$ bis $R_8$, in Klammern gefasste Zahlen bilden Paare an Rittern, auf der rechten Seite wird angegeben, um wieviel sich $\#\Omega_N$ durch jedes Paar der Reihe verringert und die blauen Linien zeigen, welche Ritter von den ersten acht Paaren untereinander geteilt werden):

<img src="Lösung Aufgabe 4 Abb1.png" style="width: 50%; background: #fff; padding: 0.5rem; border: none; border-radius: 0.75rem;">

Mithilfe dieser Strategie lässt sich nun eine rekursive Formel für das Minimum von $\#\Omega_N$ für beliebige $n\in[0;12]\in\mathbb N$ aufstellen:
$$
\#\Omega_{N~\text{min}}(n) = \begin{cases}
    56\,, & n = 0 \\
    \#\Omega_{N~\text{min}}(n-1) - 6\,, & n\in[1;4] \\
    \#\Omega_{N~\text{min}}(n-1) - 4\,, & n\in[5;12]
\end{cases}
$$

Und daraus lässt sich eine nicht-rekursive Formel ableiten:
$$
\#\Omega_{N~\text{min}}(n) = \begin{cases}
    56\,, & n = 0 \\
    56 - 6n\,, & n\in[1;4] \\
    32 - 4(n-4)\,, & n\in[5;12]
\end{cases}
$$

Zuletzt lassen sich nun mithilfe dieser Formel die Teilaufgaben a) und b) bearbeiten.

### a)
Da $\displaystyle \#\Omega_{N~\text{min}}(11) = 4 $, gibt es für jede Kombination an 11 Paaren an Rittern, die in Fehde liegen, mindestens vier Möglichkeiten, den Saal zu belegen, sodass keine der Ritter, die in Fehde liegen, zusammen im Saal einquartiert werden. Demnach können die Ritter im Fall $n=11$ immer konfliktfrei einquartiert werden. Da für kleinere $n$ weniger mögliche Saalbelegungen ausgeschlossen werden (wie auch am monotonen Fall des Funktionswertes von $\#\Omega_{N~\text{min}}(n)$ bei größer werdenden $n$ zu erkennen ist), lässt sich daraus auch ableiten, dass für alle $n\leq11$ eine konfliktfreie Einquartierung der Ritter immer möglich ist.

### b)
Da $\displaystyle \#\Omega_{N~\text{min}}(12) = 0 $, gibt es mindestens einen Fall bei $n=12$, in dem eine konfliktfreie Belegung des Saals nicht möglich ist. Da nie mehr Möglichkeiten für die Belegung des Saals durch das Hinzufügen eines Paares an Rittern, die in Fehde liegen, entstehen, lässt sich daraus ableiten, dass für alle $n\geq12$ eine konfliktfreie Belegung des Saals nicht in jedem Fall möglich ist.