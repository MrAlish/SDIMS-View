import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateFuelType from '../../../../components/revenue/fuelType/CreateFuelType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Fuel"} />
      <CreateFuelType/>
    </ViewPage>
  );
};

export default index;
