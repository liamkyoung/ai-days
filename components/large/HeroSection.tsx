import React from 'react'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import Login from '../utility/Login'

type Props = {}

function HeroSection({}: Props) {
  const session = useSession()
  return (
    <div className="w-full flex justify-between">
      <div className="m-48">
        {' '}
        <h1 className="text-6xl font-bold mb-3">AI For Everybody</h1>
        <h2 className="text-2xl italic">
          Give us your data, and we&apos;ll do the rest
        </h2>
        <div className="mt-24">
          {session.data ? (
            <div>
              <Link href="/workspaces">
                <button className="btn btn-success btn-lg mr-10">
                  Start Here &gt;
                </button>
              </Link>
              <Link href="/tutorial">
                <button className="btn btn-success btn-lg">
                  How It Works &gt;
                </button>
              </Link>{' '}
            </div>
          ) : (
            <button className="btn btn-warning btn-lg" onClick={() => signIn()}>
              Sign In and get started
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
