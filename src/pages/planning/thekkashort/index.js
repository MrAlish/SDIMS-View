import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import ThekkaShortType from '../../../components/planning/thekkaShortType/ThekkaShortType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Thekka Short"} />
      <ThekkaShortType/>
    </ViewPage>
  );
};

export default index;

