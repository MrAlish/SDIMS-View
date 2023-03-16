import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateHouseRentType from '../../../../components/revenue/houseRentType/CreateHouseRentType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"House Rent"} />
      <CreateHouseRentType/>
    </ViewPage>
  );
};

export default index;
