import fs from 'fs'
import mongoose from 'mongoose'

const options = {}

const connectMongo = async () => mongoose.connect(process.env.DOCDB_URL!)

export default connectMongo
