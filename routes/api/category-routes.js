const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include: [Product]})
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {id: req.params.id},
    include: [Product]
  })
  .then((data) => res.json(data))
  .catch((err) => console.log(err))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {where: {id: req.params.id}})
  .then((data) => res.json(data))
  .catch((err) => console.log(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({where: {id: req.params.id}})
  .then(() => console.log('Category deleted!'))
  .catch((err) => console.log(err))
});

module.exports = router;
