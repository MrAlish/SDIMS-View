import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { departmentValidationResolver } from "../../../utils/validateField";
import { createDepartment } from "../../../services/apiServices/common/department/departmentService";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";

const CreateDepartment = ({ clickedIdData }) => {
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
        try {
          createDepartment(data).then((response) => {
            if (response.status === true) {
              toast.success(response.message, {
                icon: "🚀",
                autoClose: 1000,
              });
              router.push("/common/department");
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

  return (
    <>
      <CommonHeaderDesign title={"Create Department"} />
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
        </div>

        <div className="flex justify-end ">
          <div className="flex gap-2 bg-blue-400  py-3 shadow-lg rounded-md w-36 justify-center hover:bg-blue-300 cursor-pointer ">
            <div className="pt-1">
              <FaPlus />
            </div>
            <button
              type="submit"
              className="text-sm font-extralight "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add Department"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateDepartment;
