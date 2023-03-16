import React from "react";
import Education from "../../../components/common/education/Education";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Education Year"} />
      <Education />
    </ViewPage>
  );
};

export default index;
