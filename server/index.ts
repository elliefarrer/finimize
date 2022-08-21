import express from "express";
const bodyParser = require('body-parser')
const router = require('./routes/savingGoals.route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', router);

app.listen(app.get("port"), () => {
  console.log(`🌟 Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
