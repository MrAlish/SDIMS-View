import React from 'react'
import CreateRelation from '../../../../components/common/relation/CreateRelation'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Relation"}/>
        <CreateRelation/>
    </ViewPage>
  )
}

export default index