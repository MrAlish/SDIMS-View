import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import BusinessOwnershipType from '../../../components/revenue/businessOwnershipType/BusinessOwnershipType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business Ownership"} />
      <BusinessOwnershipType/>
    </ViewPage>
  );
};

export default index;
