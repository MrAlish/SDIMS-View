import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateVehicleType from '../../../../components/revenue/vehicleType/CreateVehicleType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Vehicle"} />
      <CreateVehicleType/>
    </ViewPage>
  );
};

export default index;
