import React from "react";
import SubDepartment from "../../../components/common//subDepartment/SubDepartment";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"SubDepartment"} />
      <SubDepartment />
    </ViewPage>
  );
};

export default index;
