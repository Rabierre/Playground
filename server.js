
const nextRoutes = require('next-routes')
const routess = module.exports = nextRoutes()
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const express = require('express');
const {createServer} = require('http');
const next = require('next');
const cors = require('cors');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
require('dotenv').load();

AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3({region: 'us-east-2'});

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: 'kaj011',
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  // console.log(params);
  // return s3.upload(params).promise();
  s3.putObject(params, function(err, data) {

    if (err) {

        console.log(err)

    } else {

        console.log("Successfully uploaded data to myBucket/myKey");

    }

 });
};


const app = next({
  dev: process.env.NODE_ENV !== 'production'
});
const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = express();

  // server.use('/api', require('./routes/shows'));
  server.use('/api/shows', (req, res) => {
    return res.end('we made it');
  });



  // server.use(handler);
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());

  // server.use(cors({
  //   'allowedHeaders': ['sessionId', 'Content-Type'],
  //   'exposedHeaders': ['sessionId'],
  //   'origin': '*',
  //   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   'preflightContinue': false
  // }));
  //
  // // server.use(fileUpload());
  server.use('/public', express.static(__dirname + '/public'));
  server.use('/s3', require('react-dropzone-s3-uploader/s3router')({
    bucket: 'kaj011',                           // required
    region: 'us-east-2',                            // optional
    headers: {'Access-Control-Allow-Origin': '*'},  // optional
    ACL: 'public-read'
  }));

  // server.get('*', (req, res) => {
  //   return handle(req, res)
  //
  // })

  server.post('/test-upload', (request, response) => {
    console.log('test-upload');
    console.log(process.env.aws_access_key_id);
    console.log(process.env.aws_secret_access_key);


    const form = new multiparty.Form();
      form.parse(request, async (error, fields, files) => {
        if (error) throw new Error(error);
        try {
          const path = files.file[0].path;
          const buffer = fs.readFileSync(path);
          const type = fileType(buffer);
          const timestamp = Date.now().toString();
          console.log(timestamp);
          const fileName = `submissions/${timestamp}-lg`;
          console.log(fileName);
          const data = await uploadFile(buffer, fileName, type);
          console.log(data);
          return response.status(200).send(data);
        } catch (error) {
          return response.status(400).send(error);
        }
      });
  });

//   server.post('/upload', (req, res, next) => {
//     console.log(req);
//     let imageFile = req.files.file;
//
//     imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
//       if (err) {
//         return res.status(500).send(err);
//       }
//
//       res.json({file: `public/${req.body.filename}.jpg`});
//   });
//
// })
  server.get('*', (req, res) => {

    return handle(req, res);

  });

  server.listen(3000, (err) => {

    console.log("Ready on localhost:3000");

  });
  // createServer(handler).listen(3000, err => {
  //
  //   if(err) throw err;
  //   console.log("Ready on localhost:3000");
  //
  // });



});
