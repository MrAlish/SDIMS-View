import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateFaculty from "../../../../components/common/faculty/CreateFaculty";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { faculty } from "../../../../services/apiServices/common/faculty/facultyService";

const CreateFacultyId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let facultyApiData = () => {
      faculty().then((response) => {
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
    facultyApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.facultyid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Faculty"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateFaculty clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateFacultyId;
