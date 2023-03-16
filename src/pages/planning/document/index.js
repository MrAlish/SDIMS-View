import React from "react";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";
import DocumentType from '../../../components/planning/documentType/DocumentType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Document"} />
      <DocumentType/>
    </ViewPage>
  );
};

export default index;
