import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import ThekkaBhuktaniType from '../../../components/planning/thekkaBhuktaniType/ThekkaBhuktaniType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Thekka Bhuktani"} />
      <ThekkaBhuktaniType/>
    </ViewPage>
  );
};

export default index;
