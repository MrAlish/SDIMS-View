import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import BusinessStatus from '../../../components/revenue/businessStatus/BusinessStatus'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business Status"} />
      <BusinessStatus/>
    </ViewPage>
  );
};

export default index;
