import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { departmentValidationResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import {
  createSubDepartment,
  subDepartment,
} from "../../../services/apiServices/common/subDepartment/subDepartmentService";
import AddButton from "../../reusableDesign/AddButton";

const CreateSubDepartment = ({ clickedIdData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: departmentValidationResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);
    setValue("nameEng", clickedIdData?.nameEng);
    setValue("code", clickedIdData?.code);
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        data = {
          ...data,
          departmentId: subDepartmentId,
        };
        try {
          createSubDepartment(data).then((response) => {
            if (response.status === true) {
              toast.success(response.message, {
                icon: "🚀",
                autoClose: 1000,
              });
              router.push("/common/subdepartment");
            }
            return;
          });
        } catch (error) {
          toast.error(error.message);
        }
        resolve();
      }, 2000);
    });
  };
  const [subDepartmentId, setSubDepartmentId] = useState(null);

  const handleDepartment = (e) => {
    setSubDepartmentId(e.target.value);
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let subDepartmentApiData = () => {
      subDepartment().then((response) => {
        try {
          response.status === true;
          {
            setApiData(response.data);
          }
        } catch (error) {}
      });
    };
    subDepartmentApiData();
  }, [setApiData]);

  return (
    <>
      <CommonHeaderDesign title={"Create Sub Department"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-5  gap-5 px-5 pt-10 ">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="string"
              className="peer"
              {...register("name")}
              placeholder="."
            />
            <label className="label">Name(नेपाली)</label>
            <p> {errors?.name?.message}</p>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="string"
              className="peer"
              {...register("nameEng")}
              placeholder="."
            />
            <label className="label">Name(English)</label>

            <p> {errors?.nameEng?.message}</p>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              className="peer"
              {...register("code")}
              placeholder="."
            />
            <label className="label">Code</label>
            <p> {errors?.code?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label className="label text-blue-900 ">Department Id </label>
            <select onChange={handleDepartment} className="peer">
              <option value={subDepartmentId}>Choose a Department</option>
              {apiData.map((items, index) => {
                return (
                  <>
                    <option value={items.id} key={index}>
                      {items.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </div>

        <AddButton
          icon={<FaPlus />}
          disabled={isSubmitting}
          title={isSubmitting ? "Submitting..." : "Add Sub-Depart"}
        />
      </form>
    </>
  );
};

export default CreateSubDepartment;
