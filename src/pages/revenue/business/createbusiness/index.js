import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateBusinessType from '../../../../components/revenue/businessType/CreateBusinessType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Business"} />
      <CreateBusinessType/>
    </ViewPage>
  );
};

export default index;
