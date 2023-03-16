import React from "react";
import CreateEducation from "../../../../components/common/education/CreateEducation";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Education"} />
      <CreateEducation />
    </ViewPage>
  );
};

export default index;
