import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { officeValidationResolver } from "../../../utils/validateField";
import {
  createOffice,
  getAllState,
  getDistrict,
  getPalika,
} from "../../../services/apiServices/common/office/officeService";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import AddButton from "../../reusableDesign/AddButton";

const CreateOffice = ({ clickedIdData }) => {
  // for state
  const [state, setState] = useState([]);
  const [stateValue, setStateValue] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const handleState = (e) => {
    setStateValue(e.target.value);
  };

  useEffect(() => {
    let getAllStateApiData = () => {
      getAllState().then((response) => {
        try {
          response.status === true;
          {
            setState(response.data);
          }
        } catch (error) {}
      });
    };
    getAllStateApiData();
  }, [setState]);

  // district

  const [district, setDistrict] = useState([]);
  const [districtValue, setDistrictValue] = useState("");
  const [districtMsg, setDistrictMsg] = useState("");

  const handleDistrict = (e) => {
    setDistrictValue(e.target.value);
  };

  useEffect(() => {
    let getDistrictByStateId = () => {
      if (stateValue !== "") {
        getDistrict(stateValue).then((response) => {
          try {
            response.status === true;
            {
              setDistrict(response.data);
            }
          } catch (error) {}
        });
      }
    };
    getDistrictByStateId();
  }, [stateValue]);

  // palika

  const [palika, setPalika] = useState([]);
  const [palikaValue, setPalikaValue] = useState("");
  const [palikaMsg, setPalikaMsg] = useState("");

  const handlePalika = (e) => {
    setPalikaValue(e.target.value);
  };
  useEffect(() => {
    let getPalikaByDistrictId = () => {
      if (districtValue !== "") {
        getPalika(districtValue).then((response) => {
          try {
            response.status === true;
            {
              setPalika(response.data);
            }
          } catch (error) {}
        });
      }
    };
    getPalikaByDistrictId();
  }, [districtValue]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: officeValidationResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);
    setValue("name_En", clickedIdData?.name_En);
    setValue("code", clickedIdData?.code);
    setValue("address", clickedIdData?.address);
    setValue("phoneNo", clickedIdData?.phoneNo);
    setValue("faxNo", clickedIdData?.faxNo);
    setValue("email", clickedIdData?.email);
    setValue("url", clickedIdData?.url);
    setValue("stateId", clickedIdData?.stateId);
    setValue("districtId", clickedIdData?.districtId);
    setValue("palikaId", clickedIdData?.palikaId);
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (stateValue === "") {
          setStateMsg(<p>This field is required</p>);
        } else if (districtValue === "") {
          setDistrictMsg(<p>This field is required</p>);
        } else if (palikaValue === "") {
          setPalikaMsg(<p>This field is required</p>);
        } else {
          data = {
            ...data,
            stateId: stateValue,
            districtId: districtValue,
            palikaId: palikaValue,
          };
          try {
            createOffice(data).then((response) => {
              if (response.status === true) {
                toast.success(response.message, {
                  icon: "🚀",
                  autoClose: 1000,
                });
                router.push("/common/office");
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

  return (
    <>
      <CommonHeaderDesign title={"Create Office Report"} />
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
            <input
              type="string"
              className="peer"
              {...register("address")}
              placeholder="."
            />
            <label className="label">Address</label>
            <p> {errors?.address?.message}</p>
          </div>
          <div className="relative z-0 w-full  group">
            <input
              type="number"
              className="peer"
              {...register("phoneNo")}
              placeholder="."
            />
            <label className="label">Phone No</label>
            <p> {errors?.phoneNo?.message}</p>
          </div>
          <div className="relative  w-full mb-6 group">
            <input
              type="number"
              className="peer"
              {...register("faxNo")}
              placeholder="."
            />
            <label className="label">Fax No</label>
            <p> {errors?.faxNo?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              className="peer"
              {...register("email")}
              placeholder="."
            />

            <label className="label">Email</label>
            <p> {errors?.email?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="Url"
              className="peer"
              {...register("url")}
              placeholder="."
            />

            <label className="label">Url</label>
            <p> {errors?.url?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label className="label text-blue-900 ">State</label>
            <select onChange={handleState} value={stateValue} className="peer">
              {stateValue === "" ? (
                <>
                  <option value="" disabled>
                    Select the State
                  </option>
                </>
              ) : (
                <>
                  <option value="" disabled>
                    Select the state
                  </option>
                </>
              )}
              {state?.map((items, index) => {
                return (
                  <option key={index} value={items?.stateId}>
                    {items.stateNameNep}
                  </option>
                );
              })}
            </select>
            {stateMsg}
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label className="label text-blue-900 ">District</label>
            <select
              onChange={handleDistrict}
              value={districtValue}
              className="peer"
            >
              {stateValue === "" ? (
                <>
                  <option value="" disabled>
                    Select First State
                  </option>
                </>
              ) : (
                <>
                  <option value="" disabled>
                    Select the District
                  </option>
                </>
              )}
              {district.map((items, index) => {
                return (
                  <option key={index} value={items?.districtId}>
                    {items.districtNameNep}
                  </option>
                );
              })}
            </select>
            {districtMsg}
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label className="label text-blue-900 ">District</label>
            <select
              onChange={handlePalika}
              value={palikaValue}
              className="peer"
            >
              {districtValue === "" ? (
                <>
                  <option value="" disabled>
                    Select First District
                  </option>
                </>
              ) : (
                <>
                  <option value="" disabled>
                    Select the Palika
                  </option>
                </>
              )}
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
          disabled={isSubmitting}
          title={isSubmitting ? "Submitting..." : "Add Office"}
        />
      </form>
    </>
  );
};

export default CreateOffice;
