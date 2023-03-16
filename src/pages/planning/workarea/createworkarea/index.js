import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateWorkArea from "../../../../components/planning/workArea/CreateWorkArea";
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Work Area"} />
      <CreateWorkArea/>
    </ViewPage>
  );
};

export default index;
