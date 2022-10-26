import fs from 'fs'
import AWS from 'aws-sdk'
import formidable from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'

const s3Client = new AWS.S3({
  endpoint: process.env.S3_BUCKET_URL,
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
})

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

    try {
      return s3Client.putObject(
        {
          Bucket: process.env.S3_BUCKET,
          Key: files.datasetUpload.originalFilename,
          Body: fs.createReadStream(files.datasetUpload.filepath),
          ACL: 'public-read',
        },
        async () => res.status(201).send('File Uploaded')
      )
    } catch (e) {
      console.log(e)
      res.status(500).send('Error uploading file. Check console for errors.')
    }
  })
}
