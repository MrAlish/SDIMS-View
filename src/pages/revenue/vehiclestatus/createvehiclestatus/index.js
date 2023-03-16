import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateVehicleStatus from '../../../../components/revenue/vehicleStatus/CreateVehicleStatus'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Vehicle Status"} />
      <CreateVehicleStatus/>
    </ViewPage>
  );
};

export default index;
