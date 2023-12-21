import { S3Client, PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import { Upload } from "@aws-sdk/lib-storage";
import express from "express";
import multer from "multer";
import "../loadEnvironment.mjs";

const router = express.Router();

const upload = multer();

router.post("/", upload.single("file"), async (req, res) => {
  const fileStream = Readable.from(req.file.buffer);

  try {
    const upload = new Upload({
      client: new S3Client({
        region: process.env.BUCKET_REGION,
        credentials: {
          accessKeyId: process.env.ACCESS_KEY,
          secretAccessKey: process.env.ACCESS_KEY_SECRET,
        },
      }),
      params: {
        Bucket: process.env.BUCKET_NAME,
        Key: req.file.originalname,
        Body: fileStream,
      },
    });
    upload.on("httpUploadProgress", (progress) => {});
    await upload.done();
    res.status(200).send(upload.singleUploadResult.Location);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to upload file");
  }
});

export default router;
