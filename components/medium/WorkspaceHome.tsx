import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import ProjectLink from '../small/ProjectLink'
import UploadSection from './UploadSection'
import FileUploader from '../utility/FileUploader'

type Props = {}

function WorkspaceHome({}: Props) {
  const session = useSession()
  return (
    <div className="text-2xl text-white ml-36 mt-10 grid grid-cols-3 items-center justify-center">
      <div className="col-span-2 row-span-full">
        {session ? (
          <div className="flex space-x-10 items-center">
            <h1 className="text-3xl font-bold">
              Welcome, {session?.data?.user!.name}
            </h1>
            <button className="btn btn-warning hover:btn-outline font-bold text-xl">
              Quick Tutorial? &gt;
            </button>
          </div>
        ) : null}
        <div className="border-2 border-white rounded-md h-96 mt-12 bg-slate-800">
          <h1 className="p-8 text-3xl font-bold underline">Recent Activity</h1>
          {/* Map Projects <ProjectLink /> */}
          <ProjectLink projectId={1} name={'Project 1'} uploadStatus={100} />
          <ProjectLink projectId={2} name={'Project 2'} uploadStatus={100} />
        </div>
      </div>
      <div className="col-span-1 row-span-full flex-col flex">
        <UploadSection />
      </div>
    </div>
  )
}

export default WorkspaceHome
