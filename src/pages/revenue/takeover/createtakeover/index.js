import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateTakeOverType from '../../../../components/revenue/takeOverType/CreateTakeOverType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Take Over"} />
      <CreateTakeOverType/>
    </ViewPage>
  );
};

export default index;
