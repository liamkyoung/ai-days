import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useSelector } from 'react-redux'
import ProjectLink from '../small/ProjectLink'
import UploadSection from './UploadSection'
import FileUploader from '../utility/FileUploader'
import { RootState } from '../../redux/store'
import Link from 'next/link'

type Props = {}

function WorkspaceHome({}: Props) {
  const session = useSession()
  const workspaceData = useSelector((state: RootState) => state.user.workspaces)

  return (
    <div className="text-2xl text-white ml-36 mt-10 grid grid-cols-3 items-center justify-center">
      <div className="col-span-2 row-span-full">
        {session && (
          <div className="flex space-x-10 items-center">
            <h1 className="text-3xl font-bold">
              Welcome, {session?.data?.user!.name}
            </h1>
            <Link href="/tutorial">
              <button className="btn btn-warning hover:btn-outline font-bold text-xl">
                Quick Tutorial? &gt;
              </button>
            </Link>
          </div>
        )}
        <div className="wsContainer h-96 mt-12">
          <h1 className="p-8 text-3xl font-bold underline">Recent Activity</h1>
          <div>
            {workspaceData?.map((project) => {
              return (
                <ProjectLink
                  key={project.id}
                  projectId={project.id}
                  name={project.data.name}
                  uploadStatus={100}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-full flex-col flex">
        <UploadSection />
      </div>
    </div>
  )
}

export default WorkspaceHome
