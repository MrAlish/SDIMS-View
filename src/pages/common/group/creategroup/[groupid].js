import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateGroup from "../../../../components/common/group/CreateGroup";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { group } from "../../../../services/apiServices/common/group/groupService";

const CreateGroupId = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let groupApiData = () => {
      group().then((response) => {
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
    groupApiData();
  }, []);

  let filteredData = apiData.find(
    (item) => item.id === parseInt(query.groupid)
  );

  return (
    <ViewPage>
      <SeoOptimization title={"Create Group"} />

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateGroup clickedIdData={filteredData} />
      )}
    </ViewPage>
  );
};

export default CreateGroupId;
