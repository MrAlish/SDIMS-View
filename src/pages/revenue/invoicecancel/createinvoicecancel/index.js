import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateInvoiceCancelReason from '../../../../components/revenue/invoiceCancelReason/CreateInvoiceCancelReason'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Invoice Cancel Reason"} />
      <CreateInvoiceCancelReason/>
    </ViewPage>
  );
};

export default index;
