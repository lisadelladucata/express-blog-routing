const express = require('express')
const app = express()
const port = 3001

app.use(express.static('bacheca'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json([
    {
      titolo: "Ciambellone: un dolce classico per ogni occasione",
      contenuto: "Scopri come preparare un soffice e goloso ciambellone, perfetto per la colazione o una merenda in famiglia.",
      immagine: "/img/ciambellone.jpeg",
      tags: ["dolci", "colazione", "merenda"]
    },
    {
      titolo: "Cracker di barbabietola: uno snack sano e croccante",
      contenuto: "Impara a preparare questi deliziosi cracker a base di barbabietola, ideali per uno snack leggero e ricco di nutrienti.",
      immagine: "/img/cracker_barbabietola.jpeg",
      tags: ["snack", "barbabietola", "salute"]
    },
    {
      titolo: "Pane fritto dolce: una ricetta golosa per tutti",
      contenuto: "Scopri la ricetta del pane fritto dolce, un piatto che unisce la semplicità alla bontà, perfetto per una dolce pausa.",
      immagine: "/img/pane_fritto_dolce.jpeg",
      tags: ["dolci", "pane fritto", "ricette semplici"]
    },
    {
      titolo: "Pasta alla barbabietola: un piatto colorato e gustoso",
      contenuto: "Prepara una pasta alla barbabietola dal sapore unico e il colore vivace, ideale per un pranzo sano e ricco di sapore.",
      immagine: "/img/pasta_barbabietola.jpeg",
      tags: ["pasta", "barbabietola", "cucina sana"]
    },
    {
      titolo: "Torta paesana: un dolce rustico e tradizionale",
      contenuto: "Scopri come preparare una torta paesana, un dolce tipico e ricco di sapori, ideale per le occasioni speciali.",
      immagine: "/img/torta_paesana.jpeg",
      tags: ["dolci", "torta", "tradizione"]
    }
  ]  
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})