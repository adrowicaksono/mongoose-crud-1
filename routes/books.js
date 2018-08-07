var express = require('express');
var router = express.Router();
const ControllerBook = require('../controllers/books')
/* GET home page. */

router.get('/', ControllerBook.getAll);
router.post('/add', ControllerBook.add);
router.put('/edit/:isbn', ControllerBook.edit)
router.delete('/:id', ControllerBook.remove)

module.exports = router;
