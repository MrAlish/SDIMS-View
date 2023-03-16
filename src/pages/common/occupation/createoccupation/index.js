import React from 'react'
import CreateOccupation from '../../../../components/common/occupation/CreateOccupation'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Fiscal"}/>
        <CreateOccupation/>
    </ViewPage>
  )
}

export default index