import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateBusinessCloseReason from '../../../../components/revenue/businessCloseReason/CreateBusinessCloseReason'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Building"} />
      <CreateBusinessCloseReason/>
    </ViewPage>
  );
};

export default index;
