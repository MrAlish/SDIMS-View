import React from "react";
import Cast from "../../../components/common/cast/Cast";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Cast"} />
      <Cast />
    </ViewPage>
  );
};

export default index;
