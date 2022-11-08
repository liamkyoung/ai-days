// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../lib/mongodbClient'
import Results from '../../../models/resultsModel'
import User from '../../../models/userModel'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userEmail } = req.body
  let id = -1
  console.log('Connecting to MongoDB')
  await connectMongo()
  console.log('Placing Results')

  await Results.create(req.body).then((res) => (id = res.id))

  await User.findOneAndUpdate(
    { email: userEmail },
    { $push: { workSpaces: id } }
  )
    .then(() =>
      res.status(200).json((data: JSON) => console.log(JSON.stringify(data)))
    )
    .catch((err) => {
      res.status(500)
      console.log(err)
    })
}
