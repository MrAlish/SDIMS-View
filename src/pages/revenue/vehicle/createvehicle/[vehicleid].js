import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import CreateVehicleType from "../../../../components/revenue/vehicleType/CreateVehicleType";
import { vehicleType } from "../../../../services/apiServices/revenue/vehicleType/vehicleTypeService";
const CreateVehicleTypeId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let vehicleTypeApiData = () => {
      vehicleType().then((response) => {
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
    vehicleTypeApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.vehicleid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Vehicle Type"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateVehicleType clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateVehicleTypeId;
