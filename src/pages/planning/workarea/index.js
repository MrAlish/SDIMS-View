import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import WorkArea from '../../../components/planning/workArea/WorkArea'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Work Area"} />
      <WorkArea/>
    </ViewPage>
  );
};

export default index;
