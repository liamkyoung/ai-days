import React from 'react'
import Image from 'next/image'
import Login from '../utility/Login'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

type Props = {
  photo: string
}

function HeaderLoggedIn({ photo }: Props) {
  const { data: session } = useSession()
  return (
    <div className="flex justify-between items-center m-8 font-roboto">
      <div className="flex justify-center items-center space-x-10">
        <Link href="/">
          <div className="font-bold text-3xl flex-1 mr-16">eAIsy</div>
        </Link>
        <Link href="/">
          <h1 className="text-lg hover:font-bold">Home</h1>
        </Link>
        <Link href="/workspaces">
          <h1 className="text-lg hover:font-bold">Workspaces</h1>
        </Link>
        <Link href="/values">
          <h1 className="text-lg hover:font-bold">Values</h1>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="flex items-center mr-12">
          <h1 className="font-bold text-xl  mr-4">{session?.user?.name}</h1>
          <Image
            height={50}
            width={50}
            src={photo}
            alt="profile"
            className="rounded-full"
          />
        </div>

        <Login />
      </div>
    </div>
  )
}

export default HeaderLoggedIn
