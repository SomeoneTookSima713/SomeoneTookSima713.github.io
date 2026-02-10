## Biotische Faktoren
### Zum Anlocken des anderen Geschlechts
* Pheromone
* Körpermerkmale (besondere Farben)
* Locktänze u.Ä.
* Kommunikation

### Arten der Partnerschaften
* Dauerehe (Partner fürs Leben)
* Saisonehe (Partner pro Saison)

### Arten von Gemeinschaften
* individualisierter Verband (z.B. Wölfe)
    * jeder kennt jeden persönlich
    * man kennt soz. Vor- und Nachnamen von jedem
* anonymer individualisierter Verband (z.B. Bienen)
    * jeder kennt jeden, aber nicht so gut
    * man kennt soz. nur Nachnamen von jedem
* anonymer Verband (z.B. Heringschwarm)
    * besserer Schutz vor bspw. Fressfeinden
    * man kennt soz. niemanden persönlich

### Räuber-Beute-Diagramm
```vega-lite
{
  "data": {
    "values": [
        {"x": 0, "y": 1, "type": "Blattläuse"},
        {"x": 1, "y": 2, "type": "Blattläuse"},
        {"x": 2, "y": 1, "type": "Blattläuse"},
        {"x": 3, "y": 2, "type": "Blattläuse"},
        {"x": 4, "y": 1, "type": "Blattläuse"},
        {"x": -0.66, "y": 1.8, "type": "Marienkäfer"},
        {"x": 0.33, "y": 0.8, "type": "Marienkäfer"},
        {"x": 1.33, "y": 1.8, "type": "Marienkäfer"},
        {"x": 2.33, "y": 0.8, "type": "Marienkäfer"},
        {"x": 3.33, "y": 1.8, "type": "Marienkäfer"},
        {"x": 4.33, "y": 0.8, "type": "Marienkäfer"},
        {"x": -0.33, "y": 0.8, "type": "Fressen Blattläuse"},
        {"x": 0.66, "y": 2.5, "type": "Fressen Blattläuse"},
        {"x": 1.66, "y": 0.8, "type": "Fressen Blattläuse"},
        {"x": 2.66, "y": 2.5, "type": "Fressen Blattläuse"},
        {"x": 3.66, "y": 0.8, "type": "Fressen Blattläuse"},
        {"x": 4.66, "y": 2.5, "type": "Fressen Blattläuse"}
    ]
  },
  "mark": {
    "type": "line",
    "interpolate": "natural",
    "clip": true
  },
  "encoding": {
    "x": {"field": "x", "type": "quantitative", "title": "Zeit", "scale": {"domain": [0,4]}, "axis": {"labelExpr": ""}},
    "y": {"field": "y", "type": "quantitative", "title": "Anzahl", "axis": {"labelExpr": ""}, "scale": {"domain": [0.7,2.6]}},
    "color": {"field": "type", "type": "nominal", "title": ""}
  },
  "width": 400,
  "height": 150
}
```

### Abwehr vor Fressfeinden
* Dornen, Stacheln
* Bitterstoffe
* größer machen
* Tarnung
* bedrohliche Farben
* Schutztrachten
    * Umgebungstracht (Anpassung an die Umgebung; z.B. Chameleon, Plattfisch)
    * Nachahmungstracht (Mimese, Anpassung an bspw. Äste; z.B. Stabholzschrecke, wandelndes Blatt)
    * Warn- und Schrecktracht (z.B. Tagfaulauge, Wespen, Bienen, Marienkäfer)
    * Scheinwarntracht (Mimikry; z.B. Schwebfliege, Hornissenschwärmer)

### Parasiten
* können ohne Wirt nicht leben
* befallen Wirt, schädigen ihn (bspw. über Stoffentzug)