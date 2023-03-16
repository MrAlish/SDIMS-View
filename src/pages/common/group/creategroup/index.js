import React from 'react'
import CreateGroup from '../../../../components/common/group/CreateGroup'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Fiscal"}/>
        <CreateGroup/>
    </ViewPage>
  )
}

export default index