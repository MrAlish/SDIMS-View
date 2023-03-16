import React from 'react'
import SubGroup from '../../../components/common/subGroup/SubGroup'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"SubGroup"}/>
        <SubGroup/>
    </ViewPage>
  )
}

export default index