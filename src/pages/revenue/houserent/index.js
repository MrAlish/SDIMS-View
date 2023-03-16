import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import HouseRentType from '../../../components/revenue/houseRentType/HouseRentType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"House Rent"} />
      <HouseRentType/>
    </ViewPage>
  );
};

export default index;
