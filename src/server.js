const proffys = [
  {
     name: "Diego Fernandes",
     avatar: "https://github.com/diego3g.png", 
     whatsapp: "900000000", 
     bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
     subject: "Química", 
     cost: "20", 
     weekday: [0], 
     time_from: [720], 
     time_to: [1200]
   },
   {
     name: "Mayk Brito",
     avatar: "https://github.com/maykbrito.png", 
     whatsapp: "900000000", 
     bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
     subject: "Química", 
     cost: "20", 
     weekday: [1], 
     time_from: [720], 
     time_to: [1200]
   }
]

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  return res.render("study.html",{proffys})
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html")
}

const express = require('express');
const server = express();


const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);