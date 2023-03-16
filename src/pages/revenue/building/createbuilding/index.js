import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateBuildingType from '../../../../components/revenue/buildingType/CreateBuildingType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Building"} />
      <CreateBuildingType/>
    </ViewPage>
  );
};

export default index;
