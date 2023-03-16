import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import TakeOverType from '../../../components/revenue/takeOverType/TakeOverType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Take Over"} />
      <TakeOverType/>
    </ViewPage>
  );
};

export default index;
