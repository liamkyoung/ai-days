import React from 'react'

type Props = {}

function WorkspaceContainer({}: Props) {
  return (
    <div>
      <div className="tabs">
        <a className="tab tab-bordered">Tab 1</a>
        <a className="tab tab-bordered tab-active">Tab 2</a>
        <a className="tab tab-bordered">Tab 3</a>
      </div>
    </div>
  )
}

export default WorkspaceContainer
