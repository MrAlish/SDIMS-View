import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import WorkType from '../../../components/planning/workType/WorkType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Work Type"} />
      <WorkType/>
    </ViewPage>
  );
};

export default index;
