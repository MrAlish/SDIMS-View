import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import SartaSetup from '../../../components/planning/sartaSetup/SartaSetup'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Sarta"} />
      <SartaSetup/>
    </ViewPage>
  );
};

export default index;
