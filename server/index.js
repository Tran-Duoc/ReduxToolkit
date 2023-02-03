const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 4000;

app.post("/v1/update", (req, res) => {
   setTimeout(() => {
      return res.status(200).json(req.body);
   }, [2000]);
});

app.listen(PORT, () => {
   console.log(`server is running on port ${PORT}`);
});
