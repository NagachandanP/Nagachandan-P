 import express from "express";
const app = express();
import { ads } from "./ads.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["name","headline","primaryText","description"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(ads)) : res.json(ads);
  
});

app.listen(5000, () => console.log("API is working!"));
