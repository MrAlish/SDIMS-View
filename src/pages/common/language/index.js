import React from 'react'
import Language from '../../../components/common/language/Language'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Language"}/>
        <Language/>
    </ViewPage>
  )
}

export default index