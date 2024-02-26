const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

router.post('/', (req, res) => {
  Controllers.likeController.addLike(req.body, res);
});

router.delete('/:postID/:userID', (req, res) => {
  Controllers.likeController.removeLike(req, res);
});

router.get('/', (req, res) => {
  Controllers.likeController.getLikes(req, res);
});


module.exports = router;