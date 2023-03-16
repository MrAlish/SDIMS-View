import React from 'react'
import Post from '../../../components/common/post/Post'
import SeoOptimization from '../../../components/reusableDesign/SeoOptimzation'
import ViewPage from '../../../components/viewPage/ViewPage'

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title = {"Post"}/>
        <Post/>
    </ViewPage>
  )
}

export default index