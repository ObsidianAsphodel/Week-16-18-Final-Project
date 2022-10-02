import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const url = 'https://6338b291383946bc7feb63d3.mockapi.io/users'

const ApiForm = () => {
  const [data, setData] = useState([]);
  const [deleteID, setDeleteID] = useState([]);

  const GetData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
  }
  const PostData = async (data) => {
    fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Data: data,
        }),
      }).then((data) => console.log(data));
  }
  const DeleteData = async (id) => {
    fetch(url + "/" + id, {
        method: "DELETE",
    }).console.log("sucess");
  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" value={data} onChange={(e) => {setData(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formDeleteID">
      <Form.Label>Delete Data</Form.Label>
      <Form.Control type="text" placeholder="Enter ID you want to delete" value={deleteID} onChange={(e) => {setDeleteID(e.target.value)}}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(e) =>{
        e.preventDefault();
        DeleteData(deleteID);
    }}>
      Delete Data
    </Button>
    <br/>
    <Button variant="primary" type="submit" onClick={(e) =>{
        e.preventDefault();
        PostData(data);
    }}>
      Post Data
    </Button>
    <br/>
    <Button variant="primary" type="submit" onClick={(e) =>{
        e.preventDefault();
        GetData();
    }}>
      Get Data
    </Button>
    </Form>
  );
};

export default ApiForm;