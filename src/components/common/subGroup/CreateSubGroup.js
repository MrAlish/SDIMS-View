import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { groupValidateResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import { group } from "../../../services/apiServices/common/group/groupService";
import { createSubGroup } from "../../../services/apiServices/common/subGroup/subGroupService";
import AddButton from "../../reusableDesign/AddButton";

const CreateSubGroup = ({ clickedIdData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: groupValidateResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (groupValue === 0) {
          setGroupMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            groupId: groupValue,
          };
          try {
            createSubGroup(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/subgroup");
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

  const [groupId, setgroupId] = useState([0]);
  const [groupValue, setGroupValue] = useState(0);
  const [groupMsg, setGroupMsg] = useState("");

  const handleGroup = (e) => {
    setGroupValue(e.target.value);
  };
  useEffect(() => {
    let groupById = () => {
      group(0).then((response) => {
        try {
          response.status === true;
          {
            setgroupId(response.data);
          }
        } catch (error) {}
      });
    };

    groupById();
  }, []);

  return (
    <>
      <CommonHeaderDesign title={"Create Sub-Group"} />
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
            <label className="label text-blue-900 ">group</label>
            <select onChange={handleGroup} value={groupValue} className="peer">
              <option value={0} disabled>
                Select The group
              </option>

              {groupId.map((items, index) => {
                return (
                  <option key={index} value={items?.id}>
                    {items.name}
                  </option>
                );
              })}
            </select>
            {groupMsg}
          </div>
        </div>

        <AddButton
          icon={<FaPlus />}
          title={isSubmitting ? "Submitting..." : "Add Sub-Group"}
          disabled={isSubmitting}
        />
      </form>
    </>
  );
};

export default CreateSubGroup;
