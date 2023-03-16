import React from 'react'
import CreatePadPurtiType from '../../../../components/common/padPurtiType/CreatePadPurtiType'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Padpurti Type"}/>
        <CreatePadPurtiType/>
    </ViewPage>
  )
}

export default index