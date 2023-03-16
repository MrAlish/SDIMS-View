import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateThekkaShortType from '../../../../components/planning/thekkaShortType/CreateThekkaShortType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Thekka Short"} />
      <CreateThekkaShortType/>
    </ViewPage>
  );
};

export default index;
