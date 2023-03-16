import React from 'react'
import Punishment from '../../../components/common/punishment/Punishment'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Punishment"}/>
        <Punishment/>
    </ViewPage>
  )
}

export default index