import fs from 'fs'
import { s3Client } from '../../lib/s3Client'
import formidable from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PutObjectCommand } from '@aws-sdk/client-s3'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable()
  form.parse(req, async (err, fields, files) => {
    if (!files.datasetUpload) {
      res.status(400).send('No file uploaded.')
      return
    }

    const bucketParams = {
      Bucket: process.env.S3_BUCKET,
      Key: files.datasetUpload.originalFilename,
      Body: fs.createReadStream(files.datasetUpload.filepath),
    }
    try {
      const data = await s3Client.send(new PutObjectCommand(bucketParams))
      res.status(201).send('Successfully uploaded file.')
      return data
    } catch (e) {
      console.log(e)
      res.status(500).send('Error uploading file.')
    }
  })
}
