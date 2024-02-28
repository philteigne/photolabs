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

    const photoFile = request.file;
    const {city, country} = request.body;

    db.query(`
      INSERT INTO PHOTO (FULL_URL, REGULAR_URL, CITY, COUNTRY, USER_ID, TOPIC_ID)
      VALUES 
      ($1, $1, $2, $3, 1, 1)`,
      [photoFile.filename, city, country]
    )

    response.json(request.file);
  });

  return router;
};
