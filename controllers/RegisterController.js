const express = require("express");
const AdminSchema = require("../models/Admin");

const register = (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  AdminSchema.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.status(400).json("Username already exists");
      } else {
        return AdminSchema.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      if (data) {
        res.json("Create successfully !!");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json("Create error!");
    });
};
module.exports = register;
