import React from "react";
import Counter from "../../../components/common/counter/Counter";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Counter"} />
      <Counter />
    </ViewPage>
  );
};

export default index;
