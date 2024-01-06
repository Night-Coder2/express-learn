import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const groceriesList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quantity: 1,
  },
  {
    item: "pop-tarts",
    quantity: 1,
  },
];

app.get(
  "/groceries",
  (req, res, next) => {
    console.log("before handling request");
    next();
  },
  (req, res, next) => {
    res.json(groceriesList);
    next();
  },
  () => {
    console.log("after handling request");
  }
);

app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceriesList.push(req.body);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
