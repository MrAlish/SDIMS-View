import React from "react";
import AwardType from "../../../components/common/awardType/AwardType";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Award Type"} />
      <AwardType />
    </ViewPage>
  );
};

export default index;
