import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { postValidateResolver } from "../../../utils/validateField";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import { shredi } from "../../../services/apiServices/common/shredi/shrediService";
import { createPost } from "../../../services/apiServices/common/post/postService";
import AddButton from "../../reusableDesign/AddButton";

const CreatePost = ({ clickedIdData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: postValidateResolver });

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
        if (shrediValue === 0) {
          setShrediMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            shrediId: shrediValue,
          };
          try {
            createPost(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/post");
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

  // for shredi

  const [shrediId, setShrediId] = useState([0]);
  const [shrediValue, setShrediValue] = useState(0);

  const [shrediMsg, setShrediMsg] = useState("");

  const handleShredi = (e) => {
    setShrediValue(e.target.value);
  };
  useEffect(() => {
    let getshrediById = () => {
      shredi(0).then((response) => {
        try {
          response.status === true;
          {
            setShrediId(response.data);
          }
        } catch (error) {}
      });
    };

    getshrediById();
  }, []);

  return (
    <>
      <CommonHeaderDesign title={"Create Post"} />
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
            <label className="label text-blue-900 ">shredi</label>
            <select
              onChange={handleShredi}
              value={shrediValue}
              className="peer"
            >
              <option value={0} disabled>
                Select the shredi
              </option>

              {shrediId.map((items, index) => {
                return (
                  <option key={index} value={items?.id}>
                    {items.name}
                  </option>
                );
              })}
            </select>
            {shrediMsg}
          </div>
        </div>

        <AddButton
          icon={<FaPlus />}
          disabled={isSubmitting}
          title={isSubmitting ? "Submitting..." : "Add Post"}
        />
      </form>
    </>
  );
};

export default CreatePost;
