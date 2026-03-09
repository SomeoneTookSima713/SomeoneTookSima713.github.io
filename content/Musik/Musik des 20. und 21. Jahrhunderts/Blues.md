# Der Blues
* entstand aus Worksongs
* bildete sich nach Aufhebung der Sklaverei 1865 als musikalisches Genre aus
    * ehemalige Sklaven konnten nun ihren Arbeitgeber (jetzt nicht mehr "Master") verlassen
    * war allerdings schwierig, weil man ungelernt war, Familie verlassen musste ...

    → eher Alleingänger, Leute ohne Familie taten das
* ist eine individuelle & subjektive Auseinandersetzung mit Arbeitslosigkeit, Verlassensein, Lebensentzug, ...
* hintergründige Doppeldeutigkeit und Witze kennzeichnend für Gattung

## Der Country Blues (Downhome Blues)
* war die erste Form
* entwickelte sich nach der Abschaffung der Sklaverei (1865) in den Südstaaten der USA
* musikalische Ursprünge: Worksong/Field Hollers, Moans (=weltliche Stilistik)
* solistischer Vortrag zu individuellen Themen
* wurzelt in ländlichen Lebensverhältnissen der Südstaaten
* instrumentale Begleitung meist nur Gitarre, Banjo und/oder Mundharmonika
* an verschiedenen Orten entstanden unterschiedliche Varianten des Country Blues (+ Bsp. Vertreter):
    * Mississippi-Blues (Charley Patton)
    * Texas-Blues (Blind Lemon Jefferson)
    * Piedmont-Blues (Blind Boy Fuller)
* Huddie Ledbetter war erster Musiker, der diese Gattung einem weißen Publikum bekannt machte
* viel freier als City Blues, noch kein Bluesschema ausgebildet

## Der City Blues (Urban Blues)
* von Lebensverhältnissen und sozialen Bedingungen nordamerikanischer Großstadtghettos geprägt
* kam ca. 1900 auf
    * massenhafte Abwanderung der arbeitslosen und diskriminierten farbigen Bevölkerungsschicht in Großstädten
* Bluesmusiker berichten von eigenen Erfahrungen, hier auch vom Leben im Ghetto und von Diskriminierung
* Fortschritte in Technik und Geld in Großstädten → massenmediale Verbreitung im Rundfunk und auf Schallplatten → Kommerzialisierung und Normierung Bluesschema (entsteht ca. 1910)
* Begleitung verstärkt Piano statt Gitarre, teilweise ganze Bands
* Bessie Smith berühmte Vertreterin

## Das Bluesschema
* kristallisierte sich ~1910 im City Blues heraus
    * wird auch heute noch in einigen Stilen der Rockmusik eingesetzt
* Textinhalte:
    * Berichte von Alltagserfahrungen: Liebeskummer, Sorgen, Arbeitslosigkeit, Sehnsucht nach einem besseren Leben, ...
    * häufig mit einem ironischen Einschlag
* Besonderheit: Moll und Dur erklingen eigentlich zur gleichen Zeit
    * Noten, die von einer Tonart abweichen, nennt man "Blue Notes"
* Schema: **A**-**A**-**B**
    * **A** – Statement (Feststellung, Appell, Provokative Aussage) / Bekräftigung des Statements
    * **B** – Response (Pointe, Schlussfolgerung, Konsequenz)
    * beide Segmente jeweils vier Takte (also insg. 12 Takte: $2\cdot 4_\text{(A)} + 4_\text{(B)}$)
* jedem Teil in diesem Schema werden Begleitakkorde zugeteilt; Standard:
    * $\text{T}-\text{T}-\text{T}-\text{T}^7$
    * $\text{S}^7-\text{S}^7-\text{T}-\text{T}$
    * $\text{D}^7-\text{S}^7-\text{T}-\text{T}/\text{D}^7$
* Variationen dieses Schemas möglich
    * bspw. achttaktige oder sechzehntaktige Schemen (**A**-**B** bzw. **A**-**A**-**B**-**A**)
    * es gehen auch irreguläre Bluestypen, z.B. mit eingeschobenen ganzen, halben und/oder anderthalb Takten
* Standardisierte Abfolge von Harmonien (Begleitung)

Takt|1|2|3|4|5|6|7|8|9|10|11|12
-|-|-|-|-|-|-|-|-|-|-|-|-
Funktion|T|T|T|T|S|S|T|T|D|S|T|T/D
Harmonie (D-Dur)|D|D|D|D|G|G|D|D|A|G|D|D/A

## Die Bluestonleiter und Blue Notes
###### Beispiel: A-Dur

Oft ist ein Schlüsselmerkmal des Blues' die Kombination aus Dur und Moll: Die Harmonien stehen in Dur, die gleichzeitig erklingende Melodie erklingt in der Moll-Pentatonik bzw. in der daraus gespeisten Bluestonleiter.

### 1. Moll-Variante Bilden

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 8/4
    a h c d e f g a
}
```

### 2. Moll-Pentatonik extrahieren
* die Pentatonik kennt keine Halbtonschritte → wenn zwischen zwei Noten in einer Tonleiter nur ein Halbtonschritt liegt, wird die erste der beiden weggelassen
    * man kann sich auch einfach 1,3,4,6,7

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 6/4
    a c d f g a
}
```

**Merke: h und e sind weggefallen!**

### Bluestonleiter bilden
* jetzt muss die sog. "Flat 5" dazukommen

```lilypond {cmd="comp_lilypond.sh" hide output="html"}
#(set! paper-alist (cons '("myformat" . (cons (* 150 mm) (* 20 mm))) paper-alist))
#(set-default-paper-size "myformat")
#(set-global-staff-size 24)
\language "deutsch"
\header { tagline = " " }
\relative c' {
    \override Staff.TimeSignature.style = #'numbered
    \time 7/4
    a c d fes f g a
}
```

Zum Erkennen von Blue Notes kann man oft einfach nach Auflösungszeichen suchen, die Weichen ja i.d.R. von der normalen Tonleiter ab.