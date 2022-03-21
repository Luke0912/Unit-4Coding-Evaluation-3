const express = require("express");

const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "uploads.js"));
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now();
    callback(null, uniqueSuffix + "-" + file.fieldname);
  },
});

function fileFilter(req, file, callback) {
  // The function should call `callback` with a boolean
  // to indicate if the file should be accepted

  // To reject this file pass `false`, like so:
  callback(null, false);

  // To accept the file pass `true`, like so:
  callback(null, true);
}

const options = {
  storage: storage,
  fileFilter: fileFilter,
  limits: 1024 * 1024 * 5,
};

const uploads = multer(options);

module.exports = uploads;
