import React from "react";
import CreateFaculty from "../../../../components/common/faculty/CreateFaculty";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Faculty"} />
      <CreateFaculty />
    </ViewPage>
  );
};

export default index;
