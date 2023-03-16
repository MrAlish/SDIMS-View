import React from "react";
import CreateAppointment from "../../../../components/common/appointment/CreateAppointment";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";

const index = () => {
  return (
    <ViewPage>
      <SeoOptimization title={"Create Appointment"} />
      <CreateAppointment />
    </ViewPage>
  );
};

export default index;
