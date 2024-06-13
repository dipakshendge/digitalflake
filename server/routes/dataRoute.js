const express= require ("express");
const router = express.Router();
const data = require("../controller/dataController");
const getData = require("../controller/getDataController")
const authMiddleware = require("../middlewares/authMiddleware");


router.route('/city').post(authMiddleware, data.cityController);
router.route('/state').post(authMiddleware, data.stateController);
router.route('/wearhouse').post(authMiddleware, data.wearhouseController);

//fetch data from DB
router.route('/cities').get(getData.getCityData);
router.route('/states').get( getData.getStateData);
router.route('/wearhouses').get(getData.getWearhouseData);

// update and delete routes
router.route('/wearhouse/:id').delete(authMiddleware, data.deleteWearhouse);
router.route('/city/:id').delete(authMiddleware, data.deleteCity);
router.route('/state/:id').delete(authMiddleware, data.deleteState);  
router.route('/wearhouse/:id').put(authMiddleware, data.updateWearhouse);
router.route('/city/:id').put(authMiddleware, data.updateCity);
router.route('/state/:id').put(authMiddleware, data.updateState);


  
 
module.exports = router; 