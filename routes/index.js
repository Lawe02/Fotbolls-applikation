var express = require('express');
var router = express.Router();

var home_controller = require('../controller/homeController');

router.get('/', home_controller.index);
router.get('/admin', home_controller.admin);
router.get('/data', home_controller.data);
router.post('/data', home_controller.update);
router.post('/dataa', home_controller.del);
router.post('/datta', home_controller.change);
router.post('/admin', home_controller.pstadmin);

module.exports = router;         