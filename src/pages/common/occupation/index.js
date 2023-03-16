import React from 'react'
import Occupation from '../../../components/common/occupation/Occupation'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Occupation"}/>
        <Occupation/>
    </ViewPage>
  )
}

export default index