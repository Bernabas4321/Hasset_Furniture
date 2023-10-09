import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";

export default function UserList() {
  //const [data, setData] = useState(userRows);
  const {users,dispatch} = useContext(UserContext)

  useEffect(()=>{
    getUsers(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
      deleteUser(id,dispatch)
  };

  
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "profilePic",
      headerName: "Profile Picture",
      width: 160,
    },
    {
      field: "isAdmin",
      headerName: "Is Admin?",
      width: 160,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}
