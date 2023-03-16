import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import UpaChetra from '../../../components/planning/upaChetra/UpaChetra'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Upa Chetra"} />
      <UpaChetra/>
    </ViewPage>
  );
};

export default index;
