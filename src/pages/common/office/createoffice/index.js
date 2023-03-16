import React from 'react'
import ViewPage from '../../../../components/viewPage/ViewPage'
import CreateOffice from '../../../../components/common/office/CreateOffice'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
const createOffice = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Office"}/>
        <CreateOffice/>
    </ViewPage>
  )
}

export default createOffice