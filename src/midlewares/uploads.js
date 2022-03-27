const express = require("express");

const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now();
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

function fileFilter(req, file, callback) {
  // console.log({ file });
  // The function should call `callback` with a boolean
  // to indicate if the file should be accepted

  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // To reject this file pass `false`, like so:
    callback(null, true);
  } else {
    // To accept the file pass `true`, like so:
    callback(null, false);
  }
}

const options = {
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    filesize: 1024 * 1024 * 5,
  },
};

const uploads = multer(options);

module.exports = uploads;
