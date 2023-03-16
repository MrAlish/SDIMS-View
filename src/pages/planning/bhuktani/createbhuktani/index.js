import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateBhuktaniType from '../../../../components/planning/bhuktaniType/CreateBhuktaniType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Bhuktani"} />
      <CreateBhuktaniType/>
    </ViewPage>
  );
};

export default index;
