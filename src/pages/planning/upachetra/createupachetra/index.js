import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateUpaChetra from '../../../../components/planning/upaChetra/CreateUpaChetra'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Upa Chetra"} />
      <CreateUpaChetra/>
    </ViewPage>
  );
};

export default index;
