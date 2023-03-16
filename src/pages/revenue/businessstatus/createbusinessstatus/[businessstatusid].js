import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { businessStatus } from "../../../../services/apiServices/revenue/businessStatus/businessStatusService";
import CreateBusinessStatus from "../../../../components/revenue/businessStatus/CreateBusinessStatus";
const CreateBusinessStatusId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let businessStatusApiData = () => {
      businessStatus().then((response) => {
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
    businessStatusApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.businessstatusid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Business Status"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateBusinessStatus clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateBusinessStatusId;
