const router = require("express").Router();

module.exports = db => {
  router.post("/submit-photo", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    const {urls, location, user, similar_photos} = request.body;
    console.log(request.body)

    db.query(`
      INSERT INTO PHOTO (FULL_URL, REGULAR_URL, CITY, COUNTRY, USER_ID, TOPIC_ID)
      VALUES 
      ($1, $1, $2, $3, 1, 1)`,
      [urls.full, location.city, location.country]
    )
  });

  return router;
};
