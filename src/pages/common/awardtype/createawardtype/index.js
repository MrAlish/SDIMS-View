import React from "react";
import CreateAwardType from "../../../../components/common/awardType/CreateAwardType";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Award Type"} />
      <CreateAwardType />
    </ViewPage>
  );
};

export default index;
