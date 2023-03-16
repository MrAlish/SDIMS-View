import React from "react";
import CreateDepartment from "../../../../components/common/department/CreateDepartment";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Department"} />
      <CreateDepartment />
    </ViewPage>
  );
};

export default index;
