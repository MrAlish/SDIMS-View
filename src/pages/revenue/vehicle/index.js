import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import VehicleType from '../../../components/revenue/vehicleType/VehicleType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Vehicle"} />
      <VehicleType/>
    </ViewPage>
  );
};

export default index;
