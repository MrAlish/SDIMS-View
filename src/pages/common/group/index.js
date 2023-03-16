import React from 'react'
import Group from '../../../components/common/group/Group'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Group"}/>
        <Group/>
    </ViewPage>
  )
}

export default index