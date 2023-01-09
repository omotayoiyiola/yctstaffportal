import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { userRequest } from "../api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MDBSpinner } from "mdb-react-ui-kit";
import fileDownload from "js-file-download";
const TableList = () => {
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [publicationDetails, setPublicationDetails] = useState([]);
  function custom_sort(a, b) {
    return new Date(b.dreg).getTime() - new Date(a.dreg).getTime();
  }
  const handleOpen = (id) => {
    setOpen(true);
    const fetchData = async () => {
      const res = await axios.get(
        `http://backendyctstaff.omotayoiyiola.com:3000/singlepublicationdetails/${id}`
      );
      setPublicationDetails(res.data[0]);
    };
    fetchData();
  };
  const handleClose = () => setOpen(false);
  const { data, isLoading, isError } = useQuery(["stuff"], () => {
    try {
      return userRequest
        .get(`/mysinglepublications/${user.id}`)
        .then((res) => setUserData(res.data.sort(custom_sort)));
    } catch (error) {
      isError(error);
    }
    return data;
  });
  const rows = userData.map((list) => {
    return {
      id: list?.id,
      titl: list?.titl,
      autho: list?.autho,
      yea: list?.yea,
      newlenk: list?.newlenk,
      dreg: list?.dreg,
    };
  });
  const handleClick = (id) => {
    const DeleteData = async () => {
      try {
        if (window.confirm("are you sure you want to delete")) {
          const res = axios
            .delete(
              `http://backendyctstaff.omotayoiyiola.com:3000/deletepublication/${id}`
            )
            .then(() => toast.success("deleted successfully"))
            .then(() => window.location.reload());

          return res.data;
        }
      } catch (error) {
        return error;
      }
    };
    DeleteData();
  };

  const downloadFile = async (e, lenk, id) => {
    e.preventDefault();
    const file = lenk.slice(16);
    var ext = lenk.split(".").pop();

    axios({
      url: `http://backendyctstaff.omotayoiyiola.com:3000/downloadsinglepublicationfile/${id}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, `${file}.${ext}`);
    });
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "titl", headerName: "Title", width: 100 },
    { field: "autho", headerName: " Name of Author", width: 150 },
    { field: "yea", headerName: "Year of Publication", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 270,
      sortable: false,
      renderCell: (params) => {
        return (
          <Actions>
            <DispatchedBtn
              onClick={(e) =>
                downloadFile(e, params.row.newlenk, params.row.id)
              }
            >
              Download File
            </DispatchedBtn>
            <DeliveryBtn onClick={() => handleClick(params.row.id)}>
              Delete file
            </DeliveryBtn>
            <View onClick={() => handleOpen(params.row.id)}>View</View>
          </Actions>
        );
      },
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div style={{ height: 400, width: "70vw" }}>
      {isLoading ? (
        <h2
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <MDBSpinner />
        </h2>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={1}
          rowsPerPageOptions={[5]}
          disableSelectionClick
        />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {publicationDetails?.abst}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {publicationDetails?.priva} publication
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default TableList;
const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const DispatchedBtn = styled.div`
  background-color: rgb(38, 198, 249);
  border-radius: 10px;
  cursor: pointer;
`;
const DeliveryBtn = styled.div`
  background-color: rgb(102, 108, 255);
  border-radius: 10px;
  cursor: pointer;
`;

const View = styled.div`
  background-color: rgb(144, 225, 40);
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
`;
