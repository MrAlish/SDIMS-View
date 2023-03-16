import React from 'react'
import CreateTalimType from '../../../../components/common/talimType/CreateTalimType'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Talimtype"}/>
        <CreateTalimType/>
    </ViewPage>
  )
}

export default index