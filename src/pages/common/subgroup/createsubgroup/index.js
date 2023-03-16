import React from 'react'
import CreateSubGroup from '../../../../components/common/subGroup/CreateSubGroup'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create SubGroup"}/>
        <CreateSubGroup/>
    </ViewPage>
  )
}

export default index