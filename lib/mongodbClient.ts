import fs from 'fs'
import mongoose from 'mongoose'

const options = {
  useNewUrlParser: true,
  ssl: true,
  sslValidate: true,
  sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem'),
}

const connectMongo = async () =>
  mongoose.connect(process.env.DOCDB_URL!, options)

export default connectMongo
