import React from 'react'
import RajPatrankitSheni from '../../../components/common/rajPatrankitSheni/RajPatrankitSheni'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"RajPatrankitSheni"}/>
        <RajPatrankitSheni/>
    </ViewPage>
  )
}

export default index