import React from 'react'
import Link from 'next/link'
import Login from './Login'
import { useSession } from 'next-auth/react'
import HeaderLoggedIn from './HeaderLoggedIn'

type Props = {}

function Header({}: Props) {
  const { data: session } = useSession()
  return (
    <div className="font-roboto">
      {!session ? (
        <div className="flex items-center justify-between m-8">
          <div className="flex space-x-10">
            <Link href="/">
              <div className="font-bold text-3xl cursor-pointer">eAIsy</div>
            </Link>
            <Link href="/">
              <h1 className="text-lg hover:font-bold">Home</h1>
            </Link>
            <Link href="">
              <h1 className="text-lg hover:font-bold hover:cursor-not-allowed">
                Workspaces
              </h1>
            </Link>
            <Link href="/values">
              <h1 className="text-lg hover:font-bold">Values</h1>
            </Link>
          </div>

          <div>
            <Login />
          </div>
        </div>
      ) : (
        <HeaderLoggedIn photo={session.user?.image!} />
      )}
    </div>
  )
}

export default Header
