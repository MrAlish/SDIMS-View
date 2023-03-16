import React from 'react'
import CreateSewa from '../../../../components/common/sewa/CreateSewa'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Sewa"}/>
        <CreateSewa/>
    </ViewPage>
  )
}

export default index