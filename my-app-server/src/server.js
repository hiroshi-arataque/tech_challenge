const aws = require('aws-sdk');
aws.config.update({ region: "us-east-2" });
const s3 = new aws.S3({ apiVersion: '2006-03-01' }); // Pass in opts to S3 if necessary

const songListBucket = 'song-list-bucket';
const fileName = 'songData.json';

const getSongList = async () => {
  const params = {
   Bucket: songListBucket,
   Key: fileName
  };

  const data = await s3.getObject(params).promise();
  const contents = JSON.parse(data.Body.toString("utf-8"));

  if (!contents) {
   throw new Error(`File is empty: ${fileName}.`);
  }
  return contents;
 }
 

exports.handler = async () => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(await getSongList()),
    };
    return response;
};