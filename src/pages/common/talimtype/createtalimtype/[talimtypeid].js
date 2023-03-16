import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateTalimType from "../../../../components/common/talimType/CreateTalimType";
import CreateCast from "../../../../components/common/cast/CreateCast";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { appointment } from "../../../../services/apiServices/common/appointment/appointmentService";
import { cast } from "../../../../services/apiServices/common/cast/castService";
import { talimType } from "../../../../services/apiServices/common/talimType/talimTypeService";

const CreateTalimTypeId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let talimTypeApiData = () => {
      talimType().then((response) => {
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
    talimTypeApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.talimtypeid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Talim Type"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateTalimType clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateTalimTypeId;
