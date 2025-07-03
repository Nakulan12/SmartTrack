const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("✅ Data route working");
});

module.exports = router;

