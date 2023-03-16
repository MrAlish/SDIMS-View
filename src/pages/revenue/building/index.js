import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import BuildingType from '../../../components/revenue/buildingType/BuildingType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Building"} />
      <BuildingType/>
    </ViewPage>
  );
};

export default index;
