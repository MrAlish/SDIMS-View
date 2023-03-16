import React from "react";
import CreateCast from "../../../../components/common/cast/CreateCast";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Cast"} />
      <CreateCast />
    </ViewPage>
  );
};

export default index;
