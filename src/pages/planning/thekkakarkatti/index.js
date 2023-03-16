import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import ThekkaKarKatti from '../../../components/planning/thekkaKarKatti/ThekkaKarKatti'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Thekka Karkatti"} />
      <ThekkaKarKatti/>
    </ViewPage>
  );
};

export default index;
