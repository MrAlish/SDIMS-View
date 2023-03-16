import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import KarKatti from '../../../components/planning/karKatti/Karkatti'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Kar Katti"} />
      <KarKatti/>
    </ViewPage>
  );
};

export default index;
