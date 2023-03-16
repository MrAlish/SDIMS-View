import React from 'react'
import SewaParimad from '../../../components/common/sewaParimad/SewaParimad'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"SewaParimad"}/>
        <SewaParimad/>
    </ViewPage>
  )
}

export default index