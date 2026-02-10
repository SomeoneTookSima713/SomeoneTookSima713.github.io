# Impressionismus in der Musik
**Begriff**: vom franz. "impression"
**Zeit**: ca. 1890 - 1920
**Vertreter**: Claude Debussy, Maurice Ravel

## Merkmale in der Kunst
* historische Einordnung: Entstehung im späten 19. Jhd.; Reaktion auf Realismus und akademische Kunst
* Licht und Atmosphäre von besonderem Interesse
* Malen im Freien

## Claude Debussy
* 1862 - 1918
* bedeutender Komponist der impressionistischen Musik
* Wegbereiter für neue harmonische Konzepte
* Stilmerkmale:
    * Ablehnung traditioneller Formen
    * Fokus auf Klangfarbe und Atmosphäre

## Merkmale in der Musik
> ### Synkope
> Vorwegnahme der Betonung durch Überbindung

#### Rhythmik
* ungewöhnliche Taktart (z.B. $\frac 98$)
* Verwendung von Synkopen
* Triolen

#### Artikulation
* Nutzung d. Haltepedals am Klavier
* Ineinanderklingen der Töne (Klangschichten)

#### Instrumentierung
* Klavier, Harfe u. a.

#### Melodik
* Nutzung besonderer Tonleitern:
    * chromatische Tonleiter (nur Halbtonschritte)
    * pentatonische Tonleiter (Tonleiter mit 5 Tönen, aber ohne Halbtonschritt-hervorbringende Töne; im Fall von C-Dur F & H)

## Claude Debussys II ... Voiles – Analyse

### Tonvorrat:
```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 4/4
    b c d e fis gis b
}
```

* Ganztonleiter
* keine Halbtonschritte
    → kein Leitton
    → kein Grundton 

### Rhythmik
* rhythmische Freiheit (Noten: "Dans un rhythme sans rigeur et carresant")
* Pause direkt auf erstem Ton erschwert Nachempfinden der Taktart
* Synkopen (bspw. Takt 5-6) verschleiern Zählzeiten des Taktes (Bsp. Takt 1: Synkope sorgt dafür, dass Achtelnote zw. 2 und 1 erst eine 32tel-Note später erklingt)

### Melodik
* Klangschichten
    1. obere Stimme: Terzmotiv
    2. Bass: Orgelpunkt auf b, Bordeaux-Bass
    3. Auch Bass, aber höher (mittlere Schicht): 

### Endresultat
* komischer, ungeordneter, strukturloser Klang