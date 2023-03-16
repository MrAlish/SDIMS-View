import React from 'react'
import CreateLanguage from '../../../../components/common/language/CreateLanguage'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Language"}/>
        <CreateLanguage/>
    </ViewPage>
  )
}

export default index