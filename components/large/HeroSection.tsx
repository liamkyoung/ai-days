import React from 'react'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import Login from '../utility/Login'
import ChevronDoubleDown from '@heroicons/react/24/solid/ChevronDoubleDownIcon'
import ChevronRight from '@heroicons/react/24/solid/ChevronRightIcon'
import HeroAnimation from '../utility/HeroAnimation'

type Props = {}

function HeroSection({}: Props) {
  const session = useSession()
  return (
    <div className="flex justify-center items-center mt-56 font-roboto">
      <div className="flex-1 ml-64">
        {' '}
        <h1 className="text-6xl font-bold mb-3">
          AI Made For <span className="underline italic">Everybody.</span>
        </h1>
        <h2 className="text-4xl italic">
          Give us your data, and we&apos;ll do the rest!
        </h2>
        <div className="mt-24">
          {session.data ? (
            <div className="space-x-16">
              <Link href="/workspaces">
                <button className="btn hover:btn-success btn-warning hover:font-bold btn-lg mr-10">
                  Your Workspaces
                  <ChevronRight className="h-8 text-slate-800 pl-2" />
                </button>
              </Link>
              <Link href="/tutorial">
                <button className="btn btn-info hover:btn-success hover:font-bold btn-lg">
                  How It Works
                  <ChevronDoubleDown className="h-8 text-slate-800 pl-2" />
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
      <HeroAnimation />
    </div>
  )
}

export default HeroSection
