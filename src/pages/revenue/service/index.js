import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import Service from '../../../components/revenue/service/Service'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Service"} />
      <Service/>
    </ViewPage>
  );
};

export default index;
