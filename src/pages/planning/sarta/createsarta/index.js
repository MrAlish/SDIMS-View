import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateSartaSetup from '../../../../components/planning/sartaSetup/CreateSartaSetup'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Sarta"} />
      <CreateSartaSetup/>
    </ViewPage>
  );
};

export default index;
