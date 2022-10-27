import React from 'react'
import Link from 'next/link'
import Login from './Login'
import { useSession, signIn, signOut } from 'next-auth/react'
import HeaderLoggedIn from './HeaderLoggedIn'

type Props = {}

function Header({}: Props) {
  const { data: session } = useSession()
  return (
    <div>
      {!session ? (
        <div className="flex justify-between m-8">
          <Link href="/">
            <div className="font-bold text-3xl cursor-pointer">eAIsy</div>
          </Link>

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
