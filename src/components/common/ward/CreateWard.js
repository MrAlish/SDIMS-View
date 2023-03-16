import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { wardValidateResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import { createWard } from "../../../services/apiServices/common/ward/wardService";
import { getPalika } from "../../../services/apiServices/common/office/officeService";
import AddButton from "../../reusableDesign/AddButton";

const CreateDepartment = ({ clickedIdData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: wardValidateResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);
    setValue("name_En", clickedIdData?.name_En);
    setValue("code", clickedIdData?.code);
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (palikaValue === 0) {
          setPalikaMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            palikaId: palikaValue,
          };
          try {
            createWard(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/ward");
              }
              return;
            });
          } catch (error) {
            toast.error(error.message);
          }
        }
        resolve();
      }, 2000);
    });
  };

  // for palika

  const [palika, setPalika] = useState([0]);
  const [palikaValue, setPalikaValue] = useState(0);

  const [palikaMsg, setPalikaMsg] = useState("");

  const handlePalika = (e) => {
    setPalikaValue(e.target.value);
  };
  useEffect(() => {
    let getPalikaById = () => {
      getPalika(0).then((response) => {
        try {
          response.status === true;
          {
            setPalika(response.data);
          }
        } catch (error) {}
      });
    };

    getPalikaById();
  }, []);

  return (
    <>
      <CommonHeaderDesign title={"Create Ward"} />
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
              {...register("name_En")}
              placeholder="."
            />
            <label className="label">Name(English)</label>

            <p> {errors?.name_En?.message}</p>
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
            <label className="label text-blue-900 ">Palika</label>
            <select
              onChange={handlePalika}
              value={palikaValue}
              className="peer"
            >
              <option value={0} disabled>
                Select the Palika
              </option>

              {palika.map((items, index) => {
                return (
                  <option key={index} value={items?.palikaId}>
                    {items.palikaNameNep}
                  </option>
                );
              })}
            </select>
            {palikaMsg}
          </div>
        </div>

        <AddButton
          icon={<FaPlus />}
          title={isSubmitting ? "Submitting..." : "Add Ward"}
          disabled={isSubmitting}
        />
      </form>
    </>
  );
};

export default CreateDepartment;
