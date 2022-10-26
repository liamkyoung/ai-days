import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../lib/mongodbClient'
import User from '../../models/userModel'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, workSpaces } = req.body
  console.log('Connecting to DocumentDB')
  await connectMongo()
  console.log('Connected to DocumentDB')

  // Check if user already exists.
  const newUser = await User.create({
    name: name,
    email: email,
    workSpaces: workSpaces,
  })

  res.status(200).json((data: JSON) => console.log(JSON.stringify(data)))
}
