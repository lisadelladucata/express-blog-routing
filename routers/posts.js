const express = require('express')
const router = express.router()

//index
router.get('/' , (req, res) =>{
    res.send('lista dei post')
})

// show
router.get('/:id', (req, res) =>{
    res.send(` dettagli del post: ${req.params.id}` )
})

// create
router.post('/', (req, res) =>{
    res.send('creazione nuovo post')
})

// update
router.put('/:id', (req, res) =>{
    res.send(` modifica integrale del post: ${req.params.id}` )
})

// modify
router.patch('/:id', (req, res) =>{
    res.send(` modifica parziale post: ${req.params.id}` )
})

// destroy
router.delete('/:id', (req, res) =>{
    res.send(` eliminazione del post: ${req.params.id}` )
})




module.exports = router;