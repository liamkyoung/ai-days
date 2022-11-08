// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose, { Schema, model, models, Mongoose } from 'mongoose'
import connectMongo from '../../../lib/mongodbClient'
import User from '../../../models/userModel'
import Results from '../../../models/resultsModel'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { email } = req.query

  await connectMongo()

  await User.findOne({ email: email })
    .then((data) => {
      if (data === null)
        res
          .status(404)
          .send(JSON.stringify({ message: 'Could not find user.' }))
      return
    })
    .catch((e) => {
      res.status(500).send(JSON.stringify({ message: 'Error: Server error' }))
      console.log(e)
      return
    })

  await Results.find({ userEmail: email })
    .then((data) => {
      if (data != null) {
        res
          .status(200)
          .send(JSON.stringify({ message: 'Success!', data: data }))
      } else {
        res
          .status(404)
          .send(JSON.stringify({ message: 'Could not find any workspaces.' }))
      }
    })
    .catch((e) => {
      res.status(500).send(JSON.stringify({ message: 'Error: Server error' }))
      console.log(e)
      return
    })
}
