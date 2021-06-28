//routes
const { Router } = require('express');
const router = Router();
const cowsay = require('cowsay');

router.get("/", function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');
    res.send(
        cowsay.think({
            text: 'Donde termina el esfuerzo, comienza el fracaso',
            e: 'nn',
            f: 'daemon'
        })
    );
  });

module.exports = router;