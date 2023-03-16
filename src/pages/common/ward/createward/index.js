import React from 'react'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'
import CreateWard from "../../../../components/common/ward/CreateWard"
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Ward"}/>
        <CreateWard/>
    </ViewPage>
  )
}

export default index