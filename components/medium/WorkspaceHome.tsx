import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import ProjectLink from '../small/ProjectLink'
import UploadSection from './UploadSection'

type Props = {}

function WorkspaceHome({}: Props) {
  const session = useSession()
  return (
    <div className="text-2xl text-white mx-36 my-12">
      <div>
        {session ? (
          <div className="flex space-x-10 items-center">
            <h1 className="text-3xl font-bold">
              Welcome, {session?.data?.user!.name}
            </h1>
            <button className="btn btn-warning font-bold text-xl">
              Quick Tutorial? &gt;
            </button>
          </div>
        ) : null}
        <div className="border-2 border-white rounded-md w-1/2 h-96 mt-12 bg-slate-800">
          <h1 className="p-8 font-bold underline">Recent Activity</h1>
          {/* Map Projects <ProjectLink /> */}
          <ProjectLink name={'Project 1'} uploadStatus={50} />
          <ProjectLink name={'Project 2'} uploadStatus={100} />
          <ProjectLink name={'Project 3'} uploadStatus={92} />
        </div>
      </div>

      <div>
        <UploadSection />
      </div>
    </div>
  )
}

export default WorkspaceHome
