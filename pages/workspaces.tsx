import React from 'react'
import HeaderMetaData from '../components/utility/HeaderMetaData'
import Header from '../components/utility/Header'
import Workspace from '../components/large/Workspace'

type Props = {}

function Workspaces({}: Props) {
  return (
    <div className="page">
      <HeaderMetaData title={'eAIsy | Workspaces'} />
      <Header />
      <Workspace />
    </div>
  )
}

export default Workspaces
