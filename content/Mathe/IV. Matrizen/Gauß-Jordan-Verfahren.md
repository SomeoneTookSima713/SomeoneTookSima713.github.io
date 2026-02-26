# Matrizen
---


# Gauß-Jordan-Verfahren

$$
\begin{align*}
\text{I.}&&   3r + 6s -2t &= -4 \\
\text{II.}&&  3r + 2s + t &= 0 \\
\text{III.}&& 1,5r + 5s - 5t &= -9 \\
\end{align*}
$$

$$
\begin{align*}
\left(\begin{matrix}3 & 6 & -2 \newline 3 & 2 & 1 \newline 1,5 & 5 & -5 \end{matrix}\middle|\begin{matrix}-4 \newline 0 \newline -9\end{matrix}\right) \\
\rightarrow \left(\begin{matrix}3 & 6 & -2 \newline 0 & 4 & -3 \newline 0 & -4 & 8 \end{matrix}\middle|\begin{matrix}-4 \newline -4 \newline 14\end{matrix}\right) \\
\rightarrow \left(\begin{matrix}3 & 6 & -2 \newline 0 & 4 & -3 \newline 0 & 0 & 5 \end{matrix}\middle|\begin{matrix}-4 \newline -4 \newline 10\end{matrix}\right) \\
\rightarrow \left(\begin{matrix}3 & 0 & 2,5 \newline 0 & 4 & -3 \newline 0 & 0 & 5 \end{matrix}\middle|\begin{matrix}2 \newline -4 \newline 10\end{matrix}\right) \\
\rightarrow \left(\begin{matrix}3 & 0 & 0 \newline 0 & 4 & 0 \newline 0 & 0 & 5 \end{matrix}\middle|\begin{matrix}-3 \newline 2 \newline 10\end{matrix}\right) \\
\Rightarrow \left(\begin{matrix}1 & 0 & 0 \newline 0 & 1 & 0 \newline 0 & 0 & 1 \end{matrix}\middle|\begin{matrix}-1 \newline 0,5 \newline 2\end{matrix}\right)
\end{align*}
$$

$$ r = -1;~ s = 0,5;~ t = 2 $$