import React from "react";

const CommonHeaderDesign = ({ title }) => {
  return (
    <>
      <div className="bg-blue-100 pb-4 pt-2 px-5 flex flex-col gap-4  ">
        <div className="text-2xl font-light py-3 text-white items-center flex justify-center ">
          {title}
        </div>
        <hr />
      </div>
      <br />
    </>
  );
};

export default CommonHeaderDesign;
