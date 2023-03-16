import React from 'react'
import Ward from '../../../components/common/ward/Ward'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Ward"}/>
        <Ward/>
    </ViewPage>
  )
}

export default index