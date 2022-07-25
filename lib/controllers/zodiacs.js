const { Router } = require('express');

const { zodiacs } = require('../../data/zodiacs');

const router = Router();

router
  .get('/:id', (req, res) => {
    const zodiac = zodiacs.find(zodiac => zodiac.id === req.params.id);

    res.json(zodiac);
  })
  .get('/', (req, res) => {
    const arr = zodiacs.map(zodiac => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(arr);
  });

module.exports = router;
