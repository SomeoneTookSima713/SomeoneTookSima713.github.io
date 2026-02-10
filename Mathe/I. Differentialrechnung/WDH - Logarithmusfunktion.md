# I. Differentialrechnung

---

## Wiederholung: Logarithmus und Logarithmusfunktion

$b^3 = 8 \rightarrow b = \sqrt[3]{8} = 2$

$b^3 = 7 \rightarrow b = \sqrt[3]{7}$

$2^x = 32 \rightarrow x = \log_2(32) = 5$

$2^x = 31 \rightarrow x = \log_2(31)$

$~$
$$b^x = y \rightarrow b = \sqrt[x]y\\b^x = y \rightarrow x = \log_b(y)$$

Es gilt: $b^x = y \Leftrightarrow x = \log_by$

#### Übung

$\log_28 = 3 \rightarrow 2^3 = 8$
$\log_41 = 0 \rightarrow 4^0 = 1$
$\log_44 = 1 \rightarrow 4^1 = 4$
$\log_3(\sqrt 3) = 0,5 \rightarrow 3^{0,5} = \sqrt3$

---

$
\log_3 9 = 2 \\
\log_2 (\sqrt{8}) = 1,5 \\
\log_3 0 = \text{n.d.} \\
\log_0 3 = \text{n.d.} \\
\lg 1000 = 3 \\
\ln (e^2) = 2 \\
\ln (e) = 1
$

---
> ### Festelegung
> $ \log_{10} x = \lg x $
> $ \log_e x = \ln x $

```latex {cmd=true hide latex_zoom=2}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\color{white}
\begin{document}
Da aus $ y=b^x $ folgt, dass $ x = \log_b y $, ist $ f(x) = \log_b x $ die \textit{Umkehrfunktion} von $ f(x) = b^x $.
\end{document}
```

<iframe src="https://www.desmos.com/calculator/efp9pzp5b6" style="border: 1px solid #ccc; width: 100%; aspect-ratio: 1.8;" frameborder=0></iframe>