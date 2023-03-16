import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateServiceCategory from '../../../../components/revenue/serviceCategory/CreateServiceCategory'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Service Category"} />
      <CreateServiceCategory/>
    </ViewPage>
  );
};

export default index;
