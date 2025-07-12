const express = require('express');
const router = express.Router();
const { addData, getAllData } = require('../controllers/dataController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addData);
router.get('/', auth, getAllData);

module.exports = router;



