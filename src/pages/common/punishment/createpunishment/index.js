import React from 'react'
import CreatePunishment from '../../../../components/common/punishment/CreatePunishment'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Punishment"}/>
        <CreatePunishment/>
    </ViewPage>
  )
}

export default index