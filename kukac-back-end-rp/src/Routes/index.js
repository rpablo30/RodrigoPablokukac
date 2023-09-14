const {Router} = require('express');

const {Palindromos, criaNovoVeiculo} = require('../controllers');

const router = Router();

router.post('/palindromos/',Palindromos);

router.post('/veiculos/',criaNovoVeiculo);



module.exports = router;
