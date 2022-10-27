// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../lib/mongodbClient'
import Results from '../../models/resultsModel'
import User from '../../models/userModel'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userEmail } = req.body

  await Results.find({ email: userEmail }, (err, user) => {
    if (err) {
      res.send(err)
    }
    // return all todos in JSON format
    console.log(user)
    res.status(200).json(user)

    // res.status(200).json((data: JSON) => console.log(JSON.stringify(data)))
  })
}
