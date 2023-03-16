import React from "react";
import Dashboard from "../../components/viewPage/dashboard/Dashboard";
import ViewPage from "../../components/viewPage/ViewPage";
import SeoOptimization from "../../components/reusableDesign/SeoOptimzation";
const dashboard = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Dashboard"} />
      <Dashboard />
    </ViewPage>
  );
};

export default dashboard;
