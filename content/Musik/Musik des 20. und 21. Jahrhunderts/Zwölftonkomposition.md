## Zwölftonkomposition nach Arnold Schönberg
###### Einführung in die Regeln der Dodekaphonie

#### Grundprinzipien
* verwende alle 12 Töne der chromatischen Tonleiter (ohne Wiederholungen, außer der gleiche Ton direkt hintereinander)
* die Töne müssen in einer festgelegten Reihenfolge (Reihe) erklingen
* die chromatische Skala wird ausgeschlossen
* jede Reihenfolge bildet eine Zwölftonreihe
* abgeleitete Varianten der Reihe (Modi): Umkehrung, Krebs, Krebsumkehrung

#### Kompositionsregeln
###### Siehe Buch S. 80
* die Grundreihe und ihre Modi kann beliebig chromatisch transportiert werden
* jeder Ton kann nach oben bzw. unten oktavversetzt werden
* die Rhythmisierung der Reihe bzw. Modi ist frei
* die Reihe und ihre Modi können sowohl horizontal als auch vertikal ablaufen
> #### Beispiel eigene Zwölftonreihe
> 
> **Tonvorrat: Chromatische Reihe (deswegen 12 Töne)**
> ```lilypond {cmd="comp_lilypond.sh" hide output="html"}
> #(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
> #(set-default-paper-size "myformat")
> #(set-global-staff-size 24)
> \language "deutsch"
> \header { tagline = " " }
> \relative c' {
>     \override Staff.TimeSignature.style = #'numbered
>     \time 1/4
>     c cis d dis e f g gis a ais h c
> }
> ```
> 
> **Unsere Zwölftonreihe:**
> ```lilypond {cmd="comp_lilypond.sh" hide output="html"}
> #(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
> #(set-default-paper-size "myformat")
> #(set-global-staff-size 24)
> \language "deutsch"
> \header { tagline = " " }
> {
>     \override Staff.TimeSignature.style = #'numbered
>     \time 1/4
>     e' a' fis' f' ais' c' gis' dis' h' g' d' cis'
> }
> ```
> 
> **Krebs:**
> ```lilypond {cmd="comp_lilypond.sh" hide output="html"}
> #(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
> #(set-default-paper-size "myformat")
> #(set-global-staff-size 24)
> \language "deutsch"
> \header { tagline = " " }
> {
>     \override Staff.TimeSignature.style = #'numbered
>     \time 1/4
>     cis' d' g' h' dis' gis' c' ais' f' fis' a' e'
> }
> ```
> 
> **Umkehrung:**
> ```lilypond {cmd="comp_lilypond.sh" hide output="html"}
> #(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 25 mm))) paper-alist))
> #(set-default-paper-size "myformat")
> #(set-global-staff-size 24)
> \language "deutsch"
> \header { tagline = " " }
> {
>     \override Staff.TimeSignature.style = #'numbered
>     \time 1/4
>     e' h d' dis' ais gis' c' f' a' cis' fis' g'
> }
> ```
> 
> **Krebsumkehrung:**
> ```lilypond {cmd="comp_lilypond.sh" hide output="html"}
> #(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 25 mm))) paper-alist))
> #(set-default-paper-size "myformat")
> #(set-global-staff-size 24)
> \language "deutsch"
> \header { tagline = " " }
> {
>     \override Staff.TimeSignature.style = #'numbered
>     \time 1/4
>     g' fis' cis' a' f' c' gis' ais dis' d' h e'
> }
> ```


#### Eigenkomposition: "Miniatur in 12 Takten"
```lilypond {cmd="comp_lilypond.sh" output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 6/4
    r16 c8. cis8 d2 dis8 e8 f8 g4 r4 gis a ais h c
}

\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 6/4
    r16 c8. cis8 d2 dis8 e8 f8 g4 r4 gis a ais h c
}
```