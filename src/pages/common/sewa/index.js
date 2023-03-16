import React from 'react'
import Sewa from '../../../components/common/sewa/Sewa'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Sewa"}/>
        <Sewa/>
    </ViewPage>
  )
}

export default index