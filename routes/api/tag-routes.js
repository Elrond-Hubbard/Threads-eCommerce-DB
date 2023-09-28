const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({ include: [Product] })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
