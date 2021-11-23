const axios = require("axios");
const router = require("express").Router();

router.route("/").get((req, res) => {
    axios.get("https://fakeface.rest/face/json")
        .then(response => res.json(response.data.image_url))
        .catch(err => console.log(err));
});

module.exports = router
    
