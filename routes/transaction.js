var express = require('express');
var router = express.Router();
const ControllerTransaction = require('../controllers/transactions')
/* GET home page. */

router.get('/', ControllerTransaction.getAll);
router.post('/add', ControllerTransaction.add);
router.put('/edit/:id', ControllerTransaction.edit)
router.delete('/:id', ControllerTransaction.remove)

module.exports = router;