import React from "react";

const AddButton = ({ icon, title }) => {
  return (
    <div className="flex justify-end ">
      <div className="flex gap-2 bg-blue-400  py-3 shadow-lg rounded-md w-32 justify-center hover:bg-blue-300 cursor-pointer ">
        <div className="pt-1">{icon}</div>
        <button type="submit" className="text-sm font-extralight ">
          {title}
        </button>
      </div>
    </div>
  );
};

export default AddButton;
