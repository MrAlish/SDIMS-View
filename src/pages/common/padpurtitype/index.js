import React from 'react'
import PadPurtiType from '../../../components/common/padPurtiType/PadPurtiType'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"PadPurtiType"}/>
        <PadPurtiType/>
    </ViewPage>
  )
}

export default index