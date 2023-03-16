import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateService from '../../../../components/revenue/service/CreateService'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Building"} />
      <CreateService/>
    </ViewPage>
  );
};

export default index;
