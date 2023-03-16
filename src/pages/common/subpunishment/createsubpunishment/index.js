import React from 'react'
import CreateSubPunishment from '../../../../components/common/subPunishment/CreateSubPunishment'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create SubPunishment"}/>
        <CreateSubPunishment/>
    </ViewPage>
  )
}

export default index