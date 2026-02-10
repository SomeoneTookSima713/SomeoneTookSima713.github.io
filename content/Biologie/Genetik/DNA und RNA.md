# DNA 
###### Desoxiribonukleinsäure

Die DNA gehört zu den **Nukleinsäuren**.

> #### Nukleinsäure
> Das gängige Modell der DNA wurde von *James Watson* und *Francis Crick* 1953 entwickelt. Neben ihnen haben jedoch auch *Maurice Wilkins* und *Rosalind Franklin* ausschlaggebend zu der Entdeckung beigetragen. Das Modell beinhaltet fünf wesentliche Merkmale der DNA: ...
> (= Kernsäure)
> |Nukleinsäuren||
> |:-:|:-:|
> |DNA|RNA|

**Funktion**: Speicherung der Erbinformationen

#### Bau der DNA

* Posphatrest
* Zuckermolekül: Desoxiribose
    ```latex {cmd=true hide latex_zoom=1.8}
    \documentclass[varwidth]{standalone}
    \usepackage{xcolor}
    \usepackage{chemfig}
    \usepackage{amsmath, amssymb}
    \color{white}
    \begin{document}
    \chemfig{[-1.2,2]*5(C^4(-[6,0.75]H)(-[2,0.75]C^5H_2OH)-C^3(-[2,0.75]OH)(-[6,0.75]H)-C^2(-[2,0.75]H)(-[6,0.75]H)-C^1(-[2,0.75]H)(-[6,0.75]OH)-O-)}
    \end{document}
    ```

* Kernbasen: Nucleinsäuren
    Purinbasen|Pyrimidinbasen
    -|-
    Adenin|Cytosin
    Guanin|Thymin
    * Ringsysteme (mehrere miteinander verbundene Ringe); Heterozyklen
    * Purinbasen sind größere Moleküle (ein Sechser- und Fünferring), Pyrimidinbasen haben nur einen Sechserring

##### Grundbaustein = Nukleotid

* 1 Molekül Desoxiribose + ein Phosphatrest + eine Nukleinbase = **Nukleotid**

* Viele Nukleotide verbinden sich zu einem **Polynukleotidstrang** (bis zu 3 Mio. Nukleotide)

* zwei dieser Polynukleotidstränge verbinden sich miteinander
    * Bindung erfolgt über organische Basen
    * der entstehende DNA-Strang ist ein *antiparalleler*, *komplementärer* Doppelstrang
> #### Basenpaarungsregel
> Diese Bindung der organischen Basen erfolgt über eine *Basenpaarungsregel*. Diese besagt:
> *Nur Thymin mit Adenin sowie Guanin mit Cytosin können eine Bindung eingehen.*
>
> Wenn sich zwei Basen miteinander verbinden, sind diese *komplementär zueinander*. Sie verbinden sich über Wasserstoffbrückenbindungen:
> * Adenin-Thymin: 2 Wasserstoffbrückenbindungen
> * Cytosin-Guanin: 3 Wasserstoffbrückenbindungen
>
> Das Ergebnis dieser Bindung ist ein *DNA-Doppelstrang*.
* DNA-Doppelstrang wird in sich gedreht → *Doppelhelix*

Abbildung Nukleotid
@import "Nukleotid.svg"

```latex {cmd=true hide latex_zoom=1.8}
\documentclass[varwidth]{standalone}
\usepackage{xcolor}
\usepackage{chemfig}
\usepackage{amsmath, amssymb}
\usepackage{tikz}
\newcommand*\circled[1]{\tikz[baseline=(char.base)]{
            \node[shape=circle,draw,inner sep=2pt] (char) {#1};}}
\color{white}
\begin{document}
\chemfig{[-1.2,1]*5(4(-[2,0.75]5-[4,0.75]-[2,0.75]\circled{P})-3(-[6,1]\circled{P}-[6,1]\vdots)-2-1(-[0,1.5]Adenin)-O-)}
\end{document}
```

#### Räumliche Strukturen der DNA
Primärstruktur: Sequenz der Kernbasen
Sekundärstruktur: $\alpha$-Doppelhelix oder (nur in seltenen Fällen vorhanden) Faltblattstruktur (Zick-Zack-Linie)
Tertiärstruktur: Perlschnurstruktur (DNA-Strang ist um Histonen gewickelt, quasi wie eine Perlenkette)

#### Identische Replikation der DNA

##### Meselson-Stahl-Experiment
+ weg zur Entscheidung, ob konservative oder semikonservative Replikation vorliegt
    * konservative Replikation: Doppelstrang wird ohne Aufteilen komplett repliziert, eine Tochterzelle kriegt das Original und eine die Kopie
    * semikonservative Replikation: Doppelstrang wird getrennt, neuer Komplementärstrang für jeden produziert, jede Tochterzelle kriegt Hälfte des Originaldoppelstrangs
* Dichtegradientzentrifugation
    * Zentrifugation von DNA in stark konzentrierter Cäsiumchloridlösung
    * Gleichgewicht Zentrifugalkraft und Diffusion entsteht, dadurch Konzentrationsgefälle (gradientenartiger Verlauf von Konzentration Cäsiumchloridlösung, d.h. Dichte steigt nach unten hin an)

    → DNA sammelt sich bandenförmig in dem Bereich der Lösung an, in dem die Dichte mit der der DNA übereinstimmt (Position dann bspw. über UV-Licht in Lösung zu erkennen)
* Bakterien mit Ammoniumchlorid mit $\ce{ ^{15}N }$-Isotopen als einzige Stickstoffquelle wurden gezüchtet
    * DNA-Stränge ordneten sich in Dichtegradientzentrifugation tiefer als DNA selber Bakterien mit $\ce{ ^{14}N }$-Isotop an, weil schwererer Stickstoffisotop
* diese Bakterien wurden dann Stickstoffquelle mit $\ce{ ^{14}N }$-Isotopen ausgesetzt, nach einer Generation wieder Dichtegradientzentrifugation der DNA
    * Resultat: Anordnung des DNA-Strangs in der Mitte der zwei vorherigen Positionen

    → kann nur semikonservative DNA-Replikation sein, weil das Ergebnis voraussetzt, dass hälfte $\ce{ ^{15}N }$-Isotop und andere Hälfte $\ce{ ^{14}N }$-Isotop hat

##### Vorgang
* Replikationseinleitende Proteine binden sich an spezifischen Sequenzbereich (Replikationsursprung)
* Helicase-Enzym entwindet & trennt beide Einzelstränge der Doppelhelix (blasenartige Öffnung entsteht) → ermöglicht Anlagerung weiterer Proteine zur Stabilisierung
    * jeder Einzelstrang dient als **Matrize**
* Replikationsgabel entsteht an beiden Enden der Replikationsblase
* eine RNA-Polymerase (als Primer bezeichnet) katalysiert Synthese eines kurzen RNA-Moleküls an Ende der Replikationsgabeln (stellt Startmolekül für Anlagerung der Nukleotide über DNA-Polymerase dar)
* DNA-Polymerase katalysiert Verbindung neuer mit Matrizenstrang komplentärer DNA-Nukleotide, die (zum Anfang der Synthesereaktion) an den Primer angelagert werden
    * Voraussetzung dafür sind erste vorhandene Nukleotide
        * liegen als Nukleosid-triphosphate vor
        * von Nukleosid-triphosphaten werden zwei Phosphatreste abgespalten, um Energie für DNA-Synthese freizugeben
    * kann diese Reaktion nur in Richtung $3'\to5'$ katalysieren
        * in $5'\to3'$-Richtung werden nur kleine Stücke neu synthetisierter DNA in Richtung des Endes der Replikationsgabeln erzeugt (also trotzdem in $3'\to5'$) (die heißen *Okazaki-Stücke*)
        * für jedes Okazaki-Stück wurde zuvor ein RNA-Primer synthetisiert
        * mit Wachstum Okazaki-Stücke beginnt enzymatischer Abbau RNA-Primer
            * daraus resultierende Lücken werden von einer weiteren DNA-Polymerase aufgefüllt
* beide Matrizenstränge werden mit immer weiter wandernder Öffnung der Replikationsgabel gelesen
* an Matrize in 3'→5'-Richtung gleitet DNA-Polymerase kontinuierlich entlang & synthetisiert neuen Tochterstrang (**Leitstrang**)
    * Leitstrang hat die Ausrichtung 5'→3'
* Replikation endet durch Aufeinandertreffen zweier Replikationskomplexe
    * nur einer repliziert weiter, bis noch fehlende Nukleotide ergänzt sind & sich die Tochterstränge gänzlich trennen
* DNA-Ligase verbindet alle DNA-Stücke zu einem durchgehenden Strang

Ergebnis: zwei **identische** DNA-Stränge