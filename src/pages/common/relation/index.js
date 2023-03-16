import React from 'react'
import Relation from '../../../components/common/relation/Relation'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Relation"}/>
        <Relation/>
    </ViewPage>
  )
}

export default index