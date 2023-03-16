import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  createFiscal,
  fiscal,
} from "../../../services/apiServices/common/fiscal/fiscalService";
import { fiscalValidationResolver } from "../../../utils/validateField";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import BikramSambat from "bikram-sambat-js";
import CommonHeaderDesign from "../../reusableDesign/CommonHeaderDesign";
import AddButton from "../../reusableDesign/AddButton";
const BS = require("bikram-sambat-js");

const CreateFiscal = ({ clickedIdData }) => {
  const [fiscalId, setFiscalId] = useState(null);

  const handlePrevFiscalYearId = (e) => {
    setFiscalId(e.target.value);
  };

  const aa = new BikramSambat(new Date()).toBS();

  const [startNepDate, setStartNepDate] = useState(aa);
  const handelNepaliStartDate = (e) => {
    setStartNepDate(e);
  };

  const [endNepDate, setEndNepDate] = useState(aa);
  const handelNepaliEndDate = (e) => {
    setEndNepDate(e);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: fiscalValidationResolver });

  // to set the incoming value to the respective fields
  useEffect(() => {
    setValue("id", clickedIdData?.id);
    setValue("name", clickedIdData?.name);
    setValue("name_En", clickedIdData?.name_En);
    setValue("code", clickedIdData?.code);
    setValue("startYear", clickedIdData?.startYear);
    setValue("endYear", clickedIdData?.endYear);
  }, [clickedIdData]);

  const router = useRouter();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        data = {
          ...data,
          dateFromEng: new Date(BS.BSToAD(startNepDate)),
          dateToEng: new Date(BS.BSToAD(startNepDate)),
          previousFiscalYearId: fiscalId,
          dateFrom: startNepDate,
          dateTo: endNepDate,
        };
        try {
          createFiscal(data).then((response) => {
            if (response.status === true) {
              toast.success(response.message, {
                icon: "🚀",
                autoClose: 1000,
              });
              router.push("/common/fiscal");
            }
            return;
          });
        } catch (error) {}
        resolve();
      }, 2000);
    });
  };

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    let fiscalApiData = () => {
      fiscal().then((response) => {
        try {
          response.status === true;
          {
            setApiData(response.data);
          }
        } catch (error) {}
      });
    };
    fiscalApiData();
  }, [setApiData]);

  return (
    <>
      <CommonHeaderDesign title={"Create Fiscal Year"} />
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
              type="number"
              className="peer"
              {...register("startYear")}
              placeholder="."
            />
            <label className="label">Start Year</label>
            <p> {errors?.startYear?.message}</p>
          </div>
          <div className="relative z-0 w-full  group">
            <input
              type="number"
              className="peer"
              {...register("endYear")}
              placeholder="."
            />
            <label className="label">End Year</label>
            <p> {errors?.endYear?.message}</p>
          </div>
          <div className="relative  w-full mb-6 group">
            <label
              htmlFor=""
              className=" absolute text-[10px] text-blue-900 -top-[15%]"
            >
              जारी मिति
            </label>

            <NepaliDatePicker
              value={startNepDate}
              className="peer"
              onChange={handelNepaliStartDate}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            <p> {errors?.dateFrom?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              value={new Date(BS.BSToAD(startNepDate)).toLocaleDateString(
                "en-US"
              )}
              className="peer"
            />
            <label className="label">Start Date</label>
            <p> {errors?.dateFromEng?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor=""
              className=" absolute text-[10px] text-blue-900 -top-[15%]"
            >
              अन्तिम मिति
            </label>

            <NepaliDatePicker
              value={endNepDate}
              className="peer"
              onChange={handelNepaliEndDate}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            <p> {errors?.dateTo?.message}</p>
          </div>
          <div className="relative z-0 w-full  group">
            <input
              className="peer"
              value={new Date(BS.BSToAD(endNepDate)).toLocaleDateString(
                "en-US"
              )}
            />
            <label className="label">End Date</label>
            <p> {errors?.dateToEng?.message}</p>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label className="label text-blue-900 ">Previous Fiscal year</label>
            <select onChange={handlePrevFiscalYearId} className="peer">
              <option value={fiscalId}>Choose a Fiscal Year</option>
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
          title={isSubmitting ? "Submitting..." : "Add Fiscal"}
          disabled={isSubmitting}
        />
      </form>
    </>
  );
};

export default CreateFiscal;
