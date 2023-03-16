import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CreateOffice from '../../../../components/common/office/CreateOffice';
import SeoOptimization from '../../../../components/reusableDesign/SeoOptimzation';
import ViewPage from '../../../../components/viewPage/ViewPage';
import { office } from '../../../../services/apiServices/common/office/officeService';



const Createofficeid = () => {
  const [apiData, setApiData] = useState([]);
const [loading, setLoading] = useState(true);

const router = useRouter();
  const { query } = router;

  useEffect(() => {
    let officeApiData = () => {
      office().then((response) => {
        try {
          response.status === true;
          {
            setApiData(response.data);
            setLoading(false);
          }
        } catch (error) {
          toast.error(response.title, {
            autoClose: 1000,
          });
        }
      });
    };
    officeApiData();
  }, []);

  let filteredData = apiData.find((item)=>item.id === parseInt(query.officeid))
  
  return (
    <ViewPage>
      <SeoOptimization title={"Create Office"}/>

      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateOffice clickedIdData={filteredData} />
      )}
    </ViewPage>
  )
}

export default Createofficeid