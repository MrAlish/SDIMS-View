import React from 'react'
import CreateSewaParimad from '../../../../components/common/sewaParimad/CreateSewaParimad'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Sewaparimad"}/>
        <CreateSewaParimad/>
    </ViewPage>
  )
}

export default index