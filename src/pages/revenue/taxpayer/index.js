import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import TaxPayer from '../../../components/revenue/taxPayerType/TaxPayerType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Tax Payer"} />
      <TaxPayer/>
    </ViewPage>
  );
};

export default index;
