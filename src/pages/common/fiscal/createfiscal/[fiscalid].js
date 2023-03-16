import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateFiscal from "../../../../components/common/fiscal/CreateFiscal";
import SeoOptimization from "../../../../components/reusableDesign/SeoOptimzation";
import ViewPage from "../../../../components/viewPage/ViewPage";
import { fiscal } from "../../../../services/apiServices/common/fiscal/fiscalService";

const Createfiscalid = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;
 

  useEffect(() => {
    let fiscalApiData = () => {
      fiscal().then((response) => {
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
    fiscalApiData();
  }, []);


  let filteredData = apiData.find((item)=>item.id === parseInt(query.fiscalid))



  return (
    <ViewPage>
      
      <SeoOptimization title={"Create Fiscal"}/>

       {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <CreateFiscal clickedIdData={filteredData} />
       
      )} 
     
    </ViewPage>
  );
};

export default Createfiscalid;
