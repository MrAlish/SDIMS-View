import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import VehicleStatus from '../../../components/revenue/vehicleStatus/VehicleStatus'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Vehicle Status"} />
      <VehicleStatus/>
    </ViewPage>
  );
};

export default index;
