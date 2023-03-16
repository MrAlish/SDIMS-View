import React from "react";
import Appointment from "../../../components/common/appointment/Appointment";
import SeoOptimization from "../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Appointment"} />
      <Appointment />
    </ViewPage>
  );
};

export default index;
