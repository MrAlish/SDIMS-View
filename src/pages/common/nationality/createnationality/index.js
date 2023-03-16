import React from 'react'
import CreateNationality from '../../../../components/common/nationality/CreateNationality'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Naationality"}/>
        <CreateNationality/>
    </ViewPage>
  )
}

export default index