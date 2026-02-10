# Entwicklung der Vokalmusik

## Baukasten für Hits - Formteile von Popsongs

### Formteile von Popsongs

*Begriffe sind meistens auf Englisch*

Formteil|Teststelle|Merkmal
-|-|-
Intro|Instrumental|immer am Anfang (duh); kommt einmal vor; Text optional; oftmals da, aber optional
Verse|"Weine nicht..."|kommt mehrmals vor; selbe Melodie, unterschiedlicher Text
Chorus|"Marmor, Stein ..."|kommt mehrmals vor; selbe Melodie, selber Text; das "Herzstück" eines Popsongs: dramaturgische Steigerung
Outro|Instrumental|immer am Ende (duh); siehe Intro; **Wichtig:** Meist eigenständiger Teil, nicht leichte Variation von anderen Teilen!
Interlude|/|Zwischenspiel; dient als Übergang zw. Formteilen, meist Chorus → Verse, Verse → Chorus
Bridge|.|eher am Schluss; Kontrastteil/hohe Spannung (eigenständig), um Monotonie aufzubrechen; i.d.R. Spannungssteigerung
Pre-Chorus|.|Überleitung von Verse zu Chorus; i.d.R. Spannungssteigerung; optional

**Leadsheet:**
@import "../ABs/Marmor-Stein-und-Eisen_CUT.pdf"

**Verse**: Takt 1-8
**Chorus**: Takt 9-17

##### Verlaufsskizze "Marmor, Stein und Eisen Bricht"

* Intro → Verse → Chorus → Interlude → Verse → Chorus → Chorus' (Modulation um 1HT) → Interlude → Verse → Chorus → Chorus → Chorus

##### Verlaufsskizze "Clocks - Coldplay"

* Intro → Verse → Chorus → Interlude → Verse → Chorus → Interlude → Bridge → Interlude → Interlude' → Chorus → Outro

`Musik-Tipp von Leisterer: Coldplay`


## Mit wenigen Akkorden zum Song - Harmonienlehre

### Basis: Die Dur-Tonleiter

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 4/4
    c d e f g a h c
}
```

### Die einfache Kadenz:

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 190 mm) (* 50 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 18)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \set Score.proportionalNotationDuration = #(ly:make-moment 1/8)
    \relative c' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        c1_"I. Tonika (T)"
        \relative c' {
            f1_"IV. Subdominante (S)"
            g1_"V. Dominante (D)"
        }
        c1_"I. Tonika (T)"
    }
}
```

Funktion|Harmonie
-|-
T|C
S|F
D|G

`Tipp: Bei Tonarten, Kadenzabkürzungen (T, S, D) u.Ä. heißt es: Dur = groß, Moll = klein`

---

### Hausaufgabe
###### Kadenz in A-Dur

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    
    \relative a' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        <a cis e> \relative c'' { <d fis a> <e gis h> } <a cis e>
    }
}
```

###### Funktionsanalyse

Siehe obere Tabelle, duh

---

* Intro
* Verse
* Pre-Chorus
* Chorus
* Verse
* Pre-Chorus
* Chorus
* Bridge
* Chorus'
* Outro

---

* $\text{D}^7$ = Dominantseptakkord (laut Leisterer krasses Zeug)
* letzter Akkord sagt in 99% der Fälle Tonart an
* Info über Akkorde: Ton unter Akkord ist immer ein Ton des Dreiklangs (bzw. "Vierklangs"), aber nicht zwangsläufig der Ton im Akkord selbst!
* **A-Moll hat keine Vorzeichen**
* Dominante in Moll-Tonart ist in Dur, weil: Gis will immer zu Grundton (im Fall von A-Moll also zu a), deswegen

Drei Arten von Moll:
1. Reines Moll
    * Halbtöne zw. 2 & 3, 5 & 6
2. Harmonisches Moll
    * Halbtöne zw. 2 & 3, 5 & 6, 7 & 8
    * Anderthalbton zw. 6 & 7
3. Melodisches Moll
    * idk

Einfache Kadenz in A-Moll:

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \key a \minor
    \relative a' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        < a c e > \relative c' { < d f a > < e gis h > } < a c e >
    }
}
```

Einfache Kadenz in E-Moll:

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \key a \minor
    \relative a' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        e fis g a h c dis e
    }
}
```

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \key a \minor
    \relative a' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        <e g h> \relative c'' { <a c e> <h dis f> } <e g h>
    }
}
```

### Erweiterte Kadenz in Dur

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \key c \major
    \relative c' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        <c e g> <d f a> <e g h> <f a c> <g h d> <a c e> h <c e g>
    }
}
```

Hauptfunktionen: T, S und D auf C, F und G
Parallelfunktionen: jeweils zu Hauptfunktionen, immer eine kleine Terz runtergehen - Tp, Sp und Dp auf a, d, e

---

### Hausaufgabe

Takt 2 & 6, erster Ton: Dp


---

### WDH.: Dur- und Molldreiklänge

Dur: große Terz, kleine Terz
Moll: kleine Terz, große Terz

---

### Erweiterte Kadenz in A-Moll

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \key a \minor
    \relative c' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        <a c e> h <c e g> <d f a> <e gis h> <f a c> g <a c e>
    }
}
```

Haupfunktionen: t, s und D auf a, d und E
Parallelfunktionen: tP, sP und (Dp) auf C, F und (g)

---

### Verlaufsskizze "Irgendwas Bleibt"

* Intro
* Verse
* Verse
* Chorus
* Interlude
* Bridge
* Chorus
* Chorus'

T - G
S - C
D - D
Tp - e
Sp - a

---

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 50 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \key a \minor
    \relative c' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        <a c e>_"I. t" h <c e g>_"III. tP" <d f a>_" IV. s" <e gis h>_"V. D" <f a c>_"VI. sP" g <a c e>_"I. t"
    }
}
```

Haupfunktionen: t, s und D auf a, d und E
Parallelfunktionen: tP, sP auf C, F

t
s
(dP)
tP
sP
(dP)
D
D

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 190 mm) (* 50 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\new Staff {
    \set Score.proportionalNotationDuration = #(ly:make-moment 1/8)
    \key f \major
    \relative c' {
        \override Staff.TimeSignature.style = #'numbered
        \time 4/4
        <f a c>_"T" <g b d>_"Sp" <a c e>_"Dp" <b d f>_"S" <c e g>_"D" <d f a>_"Tp" e <f a c>_"T"
    }
}
```

F-Dur

Funktion|Dreiklang
-|-
T |F-Dur
Tp|d-Moll
S |B-Dur
Sp|g-Moll
D |C-Dur
Dp|a-Moll