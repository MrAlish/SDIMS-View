import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateAppointment from "../../../../components/common/appointment/CreateAppointment";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { appointment } from "../../../../services/apiServices/common/appointment/appointmentService";

const CreateAppointmentId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let appointmentApiData = () => {
      appointment().then((response) => {
        try {
          response.status === true;
          {
            setApiData(response.data);
            setLoading(false);
          }
        } catch (error) {
          toast.error(response.message, {
            autoClose: 1000,
          });
        }
      });
    };
    appointmentApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.appointmentid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Appointment"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateAppointment clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateAppointmentId;
