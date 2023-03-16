import React from "react";
import Faculty from "../../../components/common/faculty/Faculty";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Faculty"} />
      <Faculty />
    </ViewPage>
  );
};

export default index;
