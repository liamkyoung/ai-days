import { S3Client } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.AWS_ID!,
    secretAccessKey: process.env.AWS_SECRET!,
  },
})
export { s3Client }
