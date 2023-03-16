import React from 'react'
import ViewPage from '../../../../components/viewPage/ViewPage'
import CreateSubDepartment from '../../../../components/common/subDepartment/CreateSubDepartment'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Office"}/>
        <CreateSubDepartment/>
    </ViewPage>
  )
}

export default index