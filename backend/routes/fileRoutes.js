const mongoose = require('mongoose');
const router = require('express').Router();
const File = mongoose.model('files');

const AWS = require('aws-sdk');

var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;

const s3 = new AWS.S3();

//Gets all files
router.get('/', (req, res) => {
  console.log('Getting all documents');
  File.find({})
    .exec()
    .then(doc => res.send(doc))
    .catch(err => {
      res.send('' + err);
    });
});

//Gets a file based off fileId, returns object
router.get('/get_file_by_id/:file_id', (req, res) => {
  File.findById(req.params.file_id)
    .then(file => {
      const bucket = 'test-bucket-for-hampton-roads';
      const key = file.fileName;
      const params = {
        Bucket: bucket,
        Key: req.params.file_id + '.' + key.substr(key.lastIndexOf('.') + 1)
      };
      s3.getSignedUrl('getObject', params, (err, data) => {
        if (err) {
          res.send('' + err);
        } else {
          res.send(data);
        }
      });
    })
    .catch(err => res.send('' + err));
});

//Posts a file
router.post('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log('POSTING FILES');
    let file_to_upload = req.files.image;
    const bucket = 'test-bucket-for-hampton-roads';
    const key = file_to_upload.name;

    let file_name = {
      fileName: key
    };

    console.log(key);
    console.log(file_to_upload);
    //Try adding file to s3
    File.create(file_name, (err, file) => {
      if (err) {
        res.send('' + err);
      } else {
        // Upload document to s3 server
        const params = {
          Bucket: bucket,
          Key: file._id.toString() + '.' + key.substr(key.lastIndexOf('.') + 1),
          Body: file_to_upload.data
        };
        // res.send(doc);
        s3.upload(params, function(err, data) {
          if (err) {
            res.send('' + err);
          } else {
            console.log('Succesfully uploaded file');
            res.send(file._id);
          }
        });
      }
    });
  }
});

module.exports = router;
