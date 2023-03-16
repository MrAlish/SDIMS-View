import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateBusinessStatus from '../../../../components/revenue/businessStatus/CreateBusinessStatus'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business Status"} />
      <CreateBusinessStatus/>
    </ViewPage>
  );
};

export default index;
