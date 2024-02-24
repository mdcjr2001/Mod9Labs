"use strict";
const Models = require("../models");

const getComments = (res) => {
  Models.Comment.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const createComment = (data, res) => {
  Models.Comment.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComment = (req, res) => {
  Models.Comment.update(req.body, { where: { commentID: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { commentID: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};