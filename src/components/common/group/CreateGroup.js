import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { groupValidateResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import { sewa } from "../../../services/apiServices/common/sewa/sewaService";
import { createGroup } from "../../../services/apiServices/common/group/groupService";
import AddButton from "../../reusableDesign/AddButton";

const CreateGroup = ({ clickedIdData }) => {
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
        if (sewaValue === 0) {
          setSewaMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            sewaId: sewaValue,
          };
          try {
            createGroup(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/group");
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

  const [sewaId, setSewaId] = useState([0]);
  const [sewaValue, setSewaValue] = useState(0);
  const [sewaMsg, setSewaMsg] = useState("");

  const handleSewa = (e) => {
    setSewaValue(e.target.value);
  };
  useEffect(() => {
    let sewaById = () => {
      sewa(0).then((response) => {
        try {
          response.status === true;
          {
            setSewaId(response.data);
          }
        } catch (error) {}
      });
    };

    sewaById();
  }, []);

  return (
    <>
      <CommonHeaderDesign title={"Create Group"} />
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
            <label className="label text-blue-900 ">Sewa</label>
            <select onChange={handleSewa} value={sewaValue} className="peer">
              <option value={0} disabled>
                Select The Sewa
              </option>

              {sewaId.map((items, index) => {
                return (
                  <option key={index} value={items?.id}>
                    {items.name}
                  </option>
                );
              })}
            </select>
            {sewaMsg}
          </div>
        </div>
        <AddButton
          icon={<FaPlus />}
          title={isSubmitting ? "Submitting..." : "Add Group"}
          disabled={isSubmitting}
        />
      </form>
    </>
  );
};

export default CreateGroup;
