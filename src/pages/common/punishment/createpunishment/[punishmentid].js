import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreatePunishment from "../../../../components/common/punishment/CreatePunishment";
import CreateCast from "../../../../components/common/cast/CreateCast";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { appointment } from "../../../../services/apiServices/common/appointment/appointmentService";
import { cast } from "../../../../services/apiServices/common/cast/castService";
import { punishment } from "../../../../services/apiServices/common/punishment/punishmentService";

const CreatePunishmentId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let castApiData = () => {
      punishment().then((response) => {
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
    castApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.punishmentid)
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
        <CreatePunishment clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreatePunishmentId;
