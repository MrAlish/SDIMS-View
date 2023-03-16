import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import InvoiceCancelReason from '../../../components/revenue/invoiceCancelReason/InvoiceCancelReason'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Ivoice Cancel Reason"} />
      <InvoiceCancelReason/>
    </ViewPage>
  );
};

export default index;
