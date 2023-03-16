import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateThekkaKarKatti from '../../../../components/planning/thekkaKarKatti/CreateThekkaKarKatti'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Thekka Karkatti"} />
      <CreateThekkaKarKatti/>
    </ViewPage>
  );
};

export default index;
