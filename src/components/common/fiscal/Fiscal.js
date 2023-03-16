import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit, FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { fiscal } from "../../../services/apiServices/common/fiscal/fiscalService";
import { toast } from "react-toastify";

const Fiscal = () => {
  const router = useRouter();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fiscalApiData = () => {
      fiscal().then((response) => {
        try {
          response.status === true;
          {
            setApiData(response.data);
            setLoading(false);
          }
        } catch (error) {
          toast.error(response.message, {
            autoClose: 1000,
          });
        }
      });
    };
    fiscalApiData();
  }, [setApiData]);

  const handleEdit = (id) => {
    router.push(`/common/fiscal/createfiscal/${id}`);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="bg-gray-200 rounded-2xl shadow-2xl pb-4 pt-2 px-5 flex flex-col gap-1 ">
      <div className="text-4xl font-bold items-center flex justify-center pt-5  ">
        Fiscal Year
      </div>

      <div className="flex justify-end ">
        <div
          onClick={() => {
            router.push("/common/fiscal/createfiscal");
          }}
          className="flex gap-2 bg-blue-400  py-3 shadow-lg rounded-md w-32 justify-center hover:bg-blue-300 cursor-pointer "
        >
          <div className="pt-1">
            <FaPlus />
          </div>
          <button type="submit" className="text-sm font-extralight ">
            Add Fiscal
          </button>
        </div>
      </div>

      <hr />
      {loading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Code</StyledTableCell>
                <StyledTableCell>name</StyledTableCell>
                <StyledTableCell>Start Date</StyledTableCell>
                <StyledTableCell>End Date</StyledTableCell>
                <StyledTableCell>Prev Fiscal</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((row, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.code}
                    </StyledTableCell>
                    <StyledTableCell>{row.name_En}</StyledTableCell>
                    <StyledTableCell>
                      {row.dateFrom?.substring(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell>{row.dateTo}</StyledTableCell>
                    <StyledTableCell>
                      {row.previousFiscalYearId}
                    </StyledTableCell>
                    <StyledTableCell
                      className="pl-7 cursor-pointer "
                      onClick={() => {
                        handleEdit(row.id);
                      }}
                    >
                      <FaEdit size={20} />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Fiscal;
