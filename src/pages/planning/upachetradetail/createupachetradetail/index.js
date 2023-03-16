import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateUpaChetraDetail from '../../../../components/planning/upaChetraDetail/CreateUpaChetraDetail'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Upa Chetra Detail"} />
      <CreateUpaChetraDetail/>
    </ViewPage>
  );
};

export default index;
