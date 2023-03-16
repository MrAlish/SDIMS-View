import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import UpaChetraDetail from '../../../components/planning/upaChetraDetail/UpaChetraDetail'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Upa Chetra Detail"} />
      <UpaChetraDetail/>
    </ViewPage>
  );
};

export default index;
