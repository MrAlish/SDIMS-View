import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateWorkType from '../../../../components/planning/workType/CreateWorkType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Work Type"} />
      <CreateWorkType/>
    </ViewPage>
  );
};

export default index;
