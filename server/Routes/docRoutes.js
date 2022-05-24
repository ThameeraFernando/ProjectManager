const express = require("express");
const { StatusCodes } = require("http-status-codes");
const fileUpload = require("express-fileupload");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const bodyParser = require("body-parser");
const fs = require("fs");
const router = express.Router();
const Doc = require("../modal/Doc");
//Mongo URI
const mongoUri =
  "mongodb+srv://Thameera:1234@projectmanager.1hxrb.mongodb.net/projectmanager?retryWrites=true&w=majority";
const conn = mongoose.createConnection(mongoUri);
//INIT GFS
let gfs;
conn.once("open", () => {
  //initialize stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});
//create Storage object
let filename = "";
const storage = new GridFsStorage({
  url: mongoUri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        filename =
          file.originalname +
          new Date().getTime().toString() +
          path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

//Upload EndPoint
router.post("/:des", upload.single("file"), async (req, res) => {
  const NewDescription = req.params.des;
  const docs = await Doc.create({ docName: filename, description: NewDescription });
  res.json({ file: req.file });
});
//get doc details
router.get("/docs", async (req, res) => {
  const docs = await Doc.find({});
  return res.status(200).json({ docs });
});
router.get("/:filename", (req, res) => {
  const filename = req.params.filename;

  var bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    chunkSizeBytes: 1024,
    bucketName: "uploads",
  });

  const newPath = path.join(__dirname, "../../client/public/FOC/");
  console.log(newPath);
  bucket
    .openDownloadStreamByName(filename)
    .pipe(fs.createWriteStream(newPath + filename))
    .on("error", function (error) {
      console.log("error" + error);
      res.status(404).json({
        msg: error.message,
      });
    })
    .on("finish", function () {
      console.log("done!");
      res.json({ fileName: filename, filePath: `/FOC/${filename}` });
    });
});

//get all files
router.get("/", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No Files exist",
      });
    }
    //file exist
    res.json(files);
  });
});
//delete a file
router.delete("/:filename", async (req, res, next) => {
  const file = await gfs.files.findOne({ filename: req.params.filename });
  const gsfb = new mongoose.mongo.GridFSBucket(conn.db, {
    chunkSizeBytes: 1024,
    bucketName: "uploads",
  });
  gsfb.delete(file._id, function (err, gridStore) {
    if (err) return next(err);
    res.status(200).end();
  });
});

module.exports = router;

// conn.close();
