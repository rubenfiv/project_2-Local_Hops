
const express = require('express');
const path = require("path");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });

      app.get("/breweries", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/breweries.html"));
      });
    
      app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
      });

      app.get("/logout", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/logout.html"));
      });
    
}