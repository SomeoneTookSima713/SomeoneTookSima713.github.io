a. $\displaystyle f(x) = x^3 - x^2 + 1 $
$$
\begin{align*}
f'(x) &= 3x^2 - 2x \\
f'(x) &\overset{!}{=} 0 \\
x_1 &= 0\\
x_2 &= \frac23
\\~\\
f'(x_1-1) &= f'(-1) \\
&= 5 \\
f'(x_1+0,5) &= f'(0,5) \\
&= -\frac14 \\
f'(x_1-1) > 0;&~~ f'(x_1+0,5) < 0 ~~\rightarrow &\text{lokales Maximum}
\\~\\
f'(x_2-\frac16) &= f'(x_1+0,5) \\
&= -\frac14 \\
f'(x_2+\frac13) &= f'(1) \\
&= 1 \\
f'(x_2-\frac16) < 0;&~~ f'(x_2+\frac13) > 0 ~~\rightarrow &\text{lokales Minimum}
\end{align*}
$$

$$
\begin{align*}
\Rightarrow H&(0|1)\\
T&(\frac23|\frac{23}{27})
\end{align*}
$$

b. $\displaystyle f(x) = \frac14x^4 $
c. $\displaystyle f(x) = 2x^3+1 $ (**Hausaufgabe**)
$$
\begin{align*}
f'(x) &= 6x^2 \\
f'(x) &\overset != 0 \\
\rightarrow x &= 0
\\~\\
f'(x\pm1) &= 6 \\
&> 0 ~~~\rightarrow &\text{Sattelpunkt} \\
\Rightarrow S&(0|1)
\end{align*}
$$

d. $\displaystyle f(x) = \frac45x^5 - 2x^4 $
$$
\begin{align*}
f'(x) &:= 4x^4-8x^3 \\
f'(x) &\overset!= 0 \\
\rightarrow x &= 1 \pm 1
\\~\\
f'(0\pm1) &= 4 \pm 8 \\
\rightarrow&~~\text{lokales Maximum}
\\~\\
f'(2\pm1) &= 52 \mp 56 \\
\rightarrow&~~\text{lokales Minimum}
\end{align*}
$$

---

#### Bestimmen Sie die lokalen Hoch- & Tiefpunkte des Graphen von $f$.

##### a.

$$
\begin{align*}
f(x) &= \frac16x^3 + x^2 \\
f'(x) &= \frac12x^2 + 2x \\
f''(x) &= x + 2
\\~\\
f'(x) &\overset!= 0 \\
\rightarrow x &= -2 \pm 2
\\~\\
f''(0) &= 2 \\
\rightarrow& ~~\text{lokales Minimum}
\\~\\
f''(-4) &= -2 \\
\rightarrow& ~~\text{lokales Maximum}
\\~\\
T&(0|0) \\
H&(-4|\frac{16}3)
\end{align*}
$$

#### $~$
##### b.

$$
\begin{align*}
f(x) &= 4x^3 - 6x^2 + 9 \\
f'(x) &= 12x^2 - 12x \\
f''(x) &= 24x - 12
\\~\\
f'(x) &\overset!= 0 \\
\rightarrow x &= 0,5\pm0,5
\\~\\
f''(0) &= -12 \\
\rightarrow& ~~\text{lokales Maximum}
\\~\\
f''(1) &= 12 \\
\rightarrow& ~~\text{lokales Minimum}
\\~\\
H&(0|9) \\
T&(1|7)
\end{align*}
$$

---

#### Berechnen Sie alle Hoch-, Tief- und Sattelpunkte des Graphen von $f$. Überprüfen Sie anschließend mit dem CAS. Zeichnen Sie den Graphen ins Heft und markieren Sie die berechneten Punkte.

##### a. $\displaystyle f(x) = \frac16x^6 - \frac14x^4 $
$$
\begin{align*}
f'(x) &= x^5-x^3 \\
f''(x) &= 5x^4-3x^2 \\
f^{(4)}(x) &= 60x^2 - 6
\\~\\
f'(x) &\overset!= 0 \\
\rightarrow x_1 &= 0\\
x_2 &= 1 \\
x_3 &= -1
\\~\\
f''(0) &= 0 \\
f^{(4)}(0) &= -6 \\
\rightarrow&~~\text{lokales Maximum}
\\~\\
f''(1) &= 2\\
\rightarrow&~~\text{lokales Minimum}
\\~\\
f''(-1) &= 2\\
\rightarrow&~~\text{lokales Minimum}
\\~\\
H&(0|0) \\
T&(1|-\frac1{12}) \\
T&(-1|-\frac1{12})
\end{align*}
$$

#### $~$
##### b. $\displaystyle f(x) = -\frac14x^4 + x^3 - 4 $
$$
\begin{align*}
f'(x) &= -x^3+3x^2 \\
f''(x) &= -3x^2+6x \\
f'''(x) &= -6x + 6 \\
f^{(4)}(x) &= -6
\\~\\
f'(x) &\overset!= 0 \\
\rightarrow x_1 &= 0\\
x_2 &= 3
\\~\\
f''(0) &= 0 \\
f'''(x) &= 6 \neq 0 \\
\rightarrow&~~\text{Sattelpunkt}
\\~\\
f''(3) &= -9\\
\rightarrow&~~\text{lokales Maximum}
\\~\\
S&(0|-4) \\
H&(3|\frac{11}4) \\
\end{align*}
$$