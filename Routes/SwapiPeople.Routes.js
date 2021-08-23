const { Router,response } = require('express');
const { GetPeople} = require('../controller/SwapiPeopleController')
const router = Router();
router.get('/:id', GetPeople);


module.exports = router;