// // const AWS = require("aws-sdk");
// // const fs = require("fs");
// // // AWS.config.update(
// // //     {
// // //         accessKeyId: ".. your key ..",
// // //         secretAccessKey: ".. your secret key ..",
// // //     }
// // // );
// let bucketName = {
//   Bucket: "test-file-upload-744574295642",
//   // Delimiter: '/',
//   Prefix: process.argv[2],
// };
// const s3 = new AWS.S3();
// // バケット内のファイルをリストで全返却
// let isTrancated = false;
// do {
//   s3.listObjectsV2(bucketName, function (err, data) {
//     // data.IsTruncated = true;
//     isTrancated = data.IsTruncated;
//     bucketName.ContinuationToken = data.NextContinuationToken;
//     if (err) {
//       console.log("Error", err);
//     } else {
//       const fileNameList = data.Contents?.map((content) => content.Key) ?? [];
//       console.log(data);
//       fileNameList
//         // .filter((fileName) => fileName.startsWith(process.argv[2]))
//         .forEach((fileName) => {
//           const Key = fileName;
//           //ダウンロード
//           s3.getObject(
//             {
//               Bucket: "test-file-upload-744574295642",
//               Key,
//             },
//             (err, data) => {
//               if (err) {
//                 console.log(err);
//                 return;
//               }
//               const writer = fs.createWriteStream(Key.replaceAll("/", "-"));
//               writer
//                 .on("finish", () => {
//                   // console.log("Success", data);
//                 })
//                 .on("error", () => {
//                   // console.log("Error", data.err);
//                 });
//               writer.write(data.Body);
//               writer.end();
//             }
//           );
//         });
//     }
//   });
//   console.log(test);
//   console.log("GOT");
// } while (isTrancated);
// //listobjectsの中にgetobjectあるのよくない
// //bucket名被ってるからまとめる

// let s3Options = {
//   Bucket: "test-file-upload-744574295642",
//   Prefix: process.argv[2],
//   ContinuationToken: null
// };

// async function listObjectsRecusively () {
//   await s3.listObjectsV2(s3Options, async (error, data) => {
//     if (error) throw new Error(error);
//     const s3Items = data.Contents?.map((content) => content.Key) || [];
//     downloadS3Objects(s3Items);
//     if (data.isTrancated) {
//       s3Options.ContinuationToken = data.NextContinuationToken;
//       listObjectsRecusively();
//     }
//   });
// }

// Promise.all使える???
// function downloadS3Objects (s3Items) {
//   for (const item of s3Items) {
//     s3.getObject({
//       Bucket: bucketName,
//       Key: item,
//     }, (error, data) => {
//       if (error) throw new Error(error);
//       const writer = fs.createWriteStream(item.replaceAll("/", "-"));
//       writer.on("finish", () => {
//         console.log("Success", data);
//       });
//       writer.on("error", () => {
//         console.log("Error", data.err);
//       });
//       writer.write(data.Body);
//       writer.end();
//     });
//   }
// }
