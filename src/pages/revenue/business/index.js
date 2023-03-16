import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import BusinessType from '../../../components/revenue/businessType/BusinessType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business"} />
      <BusinessType/>
    </ViewPage>
  );
};

export default index;
