// const express = require("express");
// const app = express();

// const PORT = process.env.PORT || 3000;  // Use Cloud Run's PORT if available, else default to 3000

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });



const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Cloud Run sets PORT dynamically

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
