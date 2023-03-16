import React from 'react'
import CreateFiscal from '../../../../components/common/fiscal/CreateFiscal'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Fiscal"}/>
        <CreateFiscal/>
    </ViewPage>
  )
}

export default index