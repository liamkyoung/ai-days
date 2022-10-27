import React from 'react'
import { FileUpload } from 'primereact/fileupload'
import { useDispatch, useSelector } from 'react-redux'
import { setFileName, setStep } from '../../redux/slices/uiSlice'
import { RootState } from '../../redux/store'
import { setCurrWorkspaceId } from '../../redux/slices/userSlice'

type Props = {}

function FileUploader({}: Props) {
  const dispatch = useDispatch()
  const wsId = useSelector((state: RootState) => state.ui.currWS_ID)
  const wsStep = useSelector((state: RootState) => state.ui.currWS_Step)
  const currFile = useSelector((state: RootState) => state.ui.currUploadFile)
  return (
    <div className="">
      {' '}
      <FileUpload
        name="datasetUpload"
        url="/api/upload"
        onSelect={(e) => {
          dispatch(setFileName(e?.files[0]?.name!))
          if (wsId === -1 && wsStep === 1) {
            dispatch(setCurrWorkspaceId(0))
            dispatch(setStep(2))
          }
        }}
      />
    </div>
  )
}

export default FileUploader
