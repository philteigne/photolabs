const router = require("express").Router();
const fs = require("fs")
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const destination = multer({storage: storage})

module.exports = db => {
  router.post("/submit-photo", destination.single('file'), (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    console.log(request.file);
    console.log(request.body.name)
    console.log(request.body.username)
    console.log(request.body.city)
    console.log(request.body.country)
    const {urls, location, user, similar_photos} = request.body;

    // db.query(`
    //   INSERT INTO PHOTO (FULL_URL, REGULAR_URL, CITY, COUNTRY, USER_ID, TOPIC_ID)
    //   VALUES 
    //   ($1, $1, $2, $3, 1, 1)`,
    //   [urls.full, location.city, location.country]
    // )
  });

  return router;
};
