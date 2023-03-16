import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import BusinessCloseReason from '../../../components/revenue/businessCloseReason/BusinessCloseReason'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business Close Reason"} />
      <BusinessCloseReason/>
    </ViewPage>
  );
};

export default index;
