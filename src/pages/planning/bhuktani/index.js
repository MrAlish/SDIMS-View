import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import BhuktaniType from '../../../components/planning/bhuktaniType/BhuktaniType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Bhuktani"} />
      <BhuktaniType/>
    </ViewPage>
  );
};

export default index;
