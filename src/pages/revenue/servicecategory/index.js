import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import ServiceCategory from '../../../components/revenue/serviceCategory/ServiceCategory'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Service Category"} />
      <ServiceCategory/>
    </ViewPage>
  );
};

export default index;
