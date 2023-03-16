import React from 'react'
import SubPunishment from '../../../components/common/subPunishment/SubPunishment'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"SubPunishment"}/>
        <SubPunishment/>
    </ViewPage>
  )
}

export default index