import React from 'react'
import Office from '../../../components/common/office/Office'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const office = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Office"}/>

        <Office/>
    </ViewPage>
  )
}

export default office