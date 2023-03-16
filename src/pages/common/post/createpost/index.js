import React from 'react'
import CreatePost from '../../../../components/common/post/CreatePost'
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Post"}/>
        <CreatePost/>
    </ViewPage>
  )
}

export default index