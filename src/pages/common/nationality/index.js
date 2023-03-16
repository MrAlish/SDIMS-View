import React from 'react'
import Nationality from '../../../components/common/nationality/Nationality'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Nationality"}/>
        <Nationality/>
    </ViewPage>
  )
}

export default index