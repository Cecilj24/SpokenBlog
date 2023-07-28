const router = require('express').Router();
const {getThought, 
    getSingleThought,
createThought,
updateThought,
deleteThought} = require('../../controllers/thoughtController')

router.route('/').get(getThought).post(createThought).delete(deleteThought);





module.exports = router