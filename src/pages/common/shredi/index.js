import React from 'react'
import Shredi from '../../../components/common/shredi/Shredi'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Shredi"}/>
        <Shredi/>
    </ViewPage>
  )
}

export default index