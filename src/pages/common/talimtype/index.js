import React from 'react'
import TalimType from '../../../components/common/talimType/TalimType'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Talim Type"}/>
        <TalimType/>
    </ViewPage>
  )
}

export default index