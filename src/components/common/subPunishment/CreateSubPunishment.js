import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { castValidateResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import { createSubPunishment } from "../../../services/apiServices/common/subPunishment/subPunishmentService";
import AddButton from "../../reusableDesign/AddButton";
import { punishment } from "../../../services/apiServices/common/punishment/punishmentService";

const CreateSubPunishment = ({ clickedIdData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: castValidateResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);
    setValue("nameEng", clickedIdData?.nameEng);
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (punishmentValue === 0) {
          setPunishmentMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            punishmentId: punishmentValue,
          };
          try {
            createSubPunishment(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/subpunishment");
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

  const [punishmentId, setPunishmentId] = useState([0]);
  const [punishmentValue, setPunishmentValue] = useState(0);
  const [punishmentMsg, setPunishmentMsg] = useState("");

  const handlePunishment = (e) => {
    setPunishmentValue(e.target.value);
  };
  useEffect(() => {
    let punishmentById = () => {
      punishment(0).then((response) => {
        try {
          response.status === true;
          {
            setPunishmentId(response.data);
          }
        } catch (error) {}
      });
    };

    punishmentById();
  }, []);

  return (
    <>
      <CommonHeaderDesign title={"Create Sub Punishment"} />
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
            <label className="label text-blue-900 ">group</label>
            <select
              onChange={handlePunishment}
              value={punishmentValue}
              className="peer"
            >
              <option value={0} disabled>
                Select The Punishment
              </option>

              {punishmentId.map((items, index) => {
                return (
                  <option key={index} value={items?.id}>
                    {items.name}
                  </option>
                );
              })}
            </select>
            {punishmentMsg}
          </div>
        </div>
        <AddButton
          icon={<FaPlus />}
          title={isSubmitting ? "Submitting..." : "Add Sub-Punish"}
          disabled={isSubmitting}
        />
      </form>
    </>
  );
};

export default CreateSubPunishment;
