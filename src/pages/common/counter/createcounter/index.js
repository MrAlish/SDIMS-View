import React from "react";
import CreateCounter from "../../../../components/common/counter/CreateCounter";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Counter"} />
      <CreateCounter />
    </ViewPage>
  );
};

export default index;
