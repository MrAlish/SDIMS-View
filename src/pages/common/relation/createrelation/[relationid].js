import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateAppointment from "../../../../components/common/appointment/CreateAppointment";
import CreateCast from "../../../../components/common/cast/CreateCast";
import CreateRelation from "../../../../components/common/relation/CreateRelation";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { appointment } from "../../../../services/apiServices/common/appointment/appointmentService";
import { cast } from "../../../../services/apiServices/common/cast/castService";
import { relation } from "../../../../services/apiServices/common/relation/realtionService";

const CreateRelationId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let relationApiData = () => {
      relation().then((response) => {
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
    relationApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.relationid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Cast"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateRelation clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateRelationId;
