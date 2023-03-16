import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import FuelType from '../../../components/revenue/fuelType/FuelType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Fuel"} />
      <FuelType/>
    </ViewPage>
  );
};

export default index;
