import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateKarKatti from '../../../../components/planning/karKatti/CreateKarKatti'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Kar Katti"} />
      <CreateKarKatti/>
    </ViewPage>
  );
};

export default index;
