var express = require('express');
var router = express.Router();
const ControllerCustomer = require('../controllers/customers')

/* GET users listing. */
router.get('/', ControllerCustomer.getAll);
router.post('/add', ControllerCustomer.add);
router.put('/edit/:id', ControllerCustomer.edit)
router.delete('/:id', ControllerCustomer.remove)

module.exports = router;