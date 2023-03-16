import React from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateDocumentType from '../../../../components/planning/documentType/CreateDocumentType'
const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Document"} />
      <CreateDocumentType/>
    </ViewPage>
  );
};

export default index;
