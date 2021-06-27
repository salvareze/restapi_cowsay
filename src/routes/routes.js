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

router.get("/:mesg", function (req, res) {
    let mesg;
    try {
        if(mesg )
        mesg = req.params.mesg;
    } catch (e) {
        mesg = "Lo unico imposible es aquello que no intentas";
    }
    const respCowsay = `<pre>${cowsay.say({ 
        text: mesg,
        f: 'smiling-octopus'
     })}</pre>`;
  
    res.send(respCowsay);
  });

module.exports = router;