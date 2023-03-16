import React from "react";
import Department from "../../../components/common/department/Department";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Department"} />
      <Department />
    </ViewPage>
  );
};

export default index;
