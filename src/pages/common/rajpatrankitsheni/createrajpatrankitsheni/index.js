import React from 'react'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'
import CreateRajPatrankitSheni from '../../../../components/common/rajPatrankitSheni/CreateRajPatrankitSheni'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Create RajPatrankitSheni"}/>
        <CreateRajPatrankitSheni/>
    </ViewPage>
  )
}

export default index