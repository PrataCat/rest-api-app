const app = require("./app");
const mongoose = require("mongoose");

const { MONGO_URL, PORT = 3000 } = process.env;

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful.");
    });
  })
  .catch((err) => {
    console.log(err.message);

    process.exit(1);
  });
