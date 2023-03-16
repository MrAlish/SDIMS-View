import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import VehicleCloseReason from '../../../components/revenue/vehicleCloseReason/VehicleCloseReason'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Vehicle Close"} />
      <VehicleCloseReason/>
    </ViewPage>
  );
};

export default index;
