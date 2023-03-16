import React from 'react'
import Fiscal from '../../../components/common/fiscal/Fiscal'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Fiscal Year"}/>
        <Fiscal/>
    </ViewPage>
  )
}

export default index