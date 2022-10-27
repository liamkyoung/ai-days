import mongoose, { Schema, model, models, Mongoose } from 'mongoose'

const resultsSchema: mongoose.Schema = new Schema({
  userEmail: {
    type: String,
  },
  projectData: {
    id: {
      type: Number,
      unique: true,
      increment: true,
    },
    name: String,
    description: String,
    file: String,
    datatype: String,
    formatedCorrectly: String,
    imageData: Boolean,
    predOrCluster: Boolean,
    generativeModel: Boolean,
    advancedOptions: Object,
  },
  aiData: {
    modelScore: Number,
    features: [String],
  },
})

const Results = models.Results || model('Results', resultsSchema)

export default Results
