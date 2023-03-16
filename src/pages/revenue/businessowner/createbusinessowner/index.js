import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateBusinessOwnershipType from '../../../../components/revenue/businessOwnershipType/CreateBusinessOwnershipType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business Ownership"} />
      <CreateBusinessOwnershipType/>
    </ViewPage>
  );
};

export default index;
