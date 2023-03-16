import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateVehicleCloseReason from '../../../../components/revenue/vehicleCloseReason/CreateVehicleCloseReason'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Vehicle Close"} />
      <CreateVehicleCloseReason/>
    </ViewPage>
  );
};

export default index;
