import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { shrediValidateResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import { rajPatrankitSheni } from "../../../services/apiServices/common/rajPatrankitSheni/rajPatrankitSheniService";
import { createShredi } from "../../../services/apiServices/common/shredi/shrediService";
import AddButton from "../../reusableDesign/AddButton";

const CreateShredi = ({ clickedIdData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: shrediValidateResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);w
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (rajPatrankitSheniValue === 0) {
          setrajPatrankitSheniMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            rajPatrankitSheniId: rajPatrankitSheniValue,
          };
          try {
            createShredi(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/shredi");
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

  // for rajPatrankitSheni

  const [rajPatrankitSheniId, setRajPatrankitSheniId] = useState([0]);
  const [rajPatrankitSheniValue, setrajPatrankitSheniValue] = useState(0);
  const [rajPatrankitSheniMsg, setrajPatrankitSheniMsg] = useState("");

  const handlerajPatrankitSheni = (e) => {
    setrajPatrankitSheniValue(e.target.value);
  };
  useEffect(() => {
    let getRajPatrankitSheniById = () => {
      rajPatrankitSheni(0).then((response) => {
        try {
          response.status === true;
          {
            setRajPatrankitSheniId(response.data);
          }
        } catch (error) {}
      });
    };

    getRajPatrankitSheniById();
  }, []);

  return (
    <>
      <CommonHeaderDesign title={"Create Counter"} />
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
            <label className="label text-blue-900 ">rajPatrankitSheni</label>
            <select
              onChange={handlerajPatrankitSheni}
              value={rajPatrankitSheniValue}
              className="peer"
            >
              <option value={0} disabled>
                Select The Rajpatrankitsheni
              </option>

              {rajPatrankitSheniId.map((items, index) => {
                return (
                  <option key={index} value={items?.id}>
                    {items.name}
                  </option>
                );
              })}
            </select>
            {rajPatrankitSheniMsg}
          </div>
        </div>

        <AddButton
          icon={<FaPlus />}
          disabled={isSubmitting}
          title={isSubmitting ? "Submitting..." : "Add Shredi"}
        />
      </form>
    </>
  );
};

export default CreateShredi;
