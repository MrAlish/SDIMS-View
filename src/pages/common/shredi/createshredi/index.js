import React from 'react'
import CreateShredi from '../../../../components/common/shredi/CreateShredi'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Shredi"}/>
        <CreateShredi/>
    </ViewPage>
  )
}

export default index