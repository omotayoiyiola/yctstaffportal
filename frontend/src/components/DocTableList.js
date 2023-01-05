import React, {  useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { userRequest } from "../api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
const DocTableList = () => {
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);

  function custom_sort(a, b) {
    return new Date(b.dreg).getTime() - new Date(a.dreg).getTime();
  }
  const { data, isLoading, isError } = useQuery(["stuff"], () => {
    try {
      return userRequest
        .get(`/myuploadedfiles/${user.id}`)
        .then((res) => setUserData(res.data.sort(custom_sort)));
    } catch (error) {
      isError(error);
    }
  });
  const rows = userData.map((list) => {
    return {
      id: list?.id,
      titl: list?.titl,
      dreg: list?.dreg,
    };
  });
  console.log(userData);
  const handleClick = (id) => {
    const DeleteData = async () => {
      try {
        if (window.confirm("are you sure you want to delete")) {
          const res = axios
            .delete(
              `http://backendyctstaff.omotayoiyiola.com:3000/deletefile/${id}`
            )
            .then(() => toast.success("deleted successfully"))
            .then(() => window.location.reload());

          return res.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    DeleteData();
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "titl", headerName: "Title", width: 200 },
    { field: "dreg", headerName: "Date Uploaded", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 270,
      sortable: false,
      renderCell: (params) => {
        return (
          <Actions>
            <DownloadBtn>Download File</DownloadBtn>
            <DeleteBtn onClick={() => handleClick(params.row.id)}>
              Delete file
            </DeleteBtn>
          </Actions>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      {userData.length === 0 ? (
        <h2
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "auto",
          }}
        >
          NO PUBLICATIONS YET
        </h2>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionClick
        />
      )}
    </div>
  );
};

export default DocTableList;
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

const DownloadBtn = styled.div`
  background-color: rgb(38, 198, 249);
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;
const DeleteBtn = styled.div`
  background-color: red;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;
