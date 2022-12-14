import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import Axios from 'axios';


import { useState, useEffect } from "react";

const Datatable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (_id) => {
    console.log("Clicked Delet");
   
    try{
    Axios.delete(`http://localhost:3001/delete/${_id}`)
    setData(data.filter((item) => item._id !== _id));
    console.log("Deleted");

    }
    catch(err)
    {
        console.log(err);
    }
  
    
  };
  
  
  const [userdata, setUserdata] = ([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/userslist")
    .then((response) => {
      
      setData(response.data);
      
      
    })
    .catch((err)=> {
      alert(err);
    })

  },[])

  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/edit"  state={{data: params.row}}style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
