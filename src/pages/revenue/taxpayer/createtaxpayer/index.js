import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateTaxPayer from '../../../../components/revenue/taxPayerType/CreateTaxPayerType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Tax Payer"} />
      <CreateTaxPayer/>
    </ViewPage>
  );
};

export default index;
