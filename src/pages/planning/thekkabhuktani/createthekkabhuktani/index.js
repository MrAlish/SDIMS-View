import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateThekaBhuktaniType from '../../../../components/planning/thekkaBhuktaniType/CreateThekaBhuktaniType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Thekka Bhuktani"} />
      <CreateThekaBhuktaniType/>
    </ViewPage>
  );
};

export default index;
