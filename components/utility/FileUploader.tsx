import React from 'react'
import { FileUpload } from 'primereact/fileupload'

type Props = {}

function FileUploader({}: Props) {
  return (
    <div>
      {' '}
      <FileUpload name="datasetUpload" url="/api/upload" />
    </div>
  )
}

export default FileUploader
