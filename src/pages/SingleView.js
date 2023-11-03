import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function SingleView() {
  const { id } = useParams();
  console.log(id);

  const [AllData, setData] = useState([]);

  const fetchAlldatas = async () => {
    const result = await axios.get("/contacts.json");
    setData(result.data.contacts);
  };
  useEffect(() => {
    fetchAlldatas();
  }, []);

  const singleData = AllData.find((i) => i.id == id);
  console.log(singleData);

  return (
    <div>
      {singleData && (
        <Row className="p-5">
          <Col className="p-5" >
            <img style={{height:'600px',width:'75%', borderRadius:'25px'}} 
            src={singleData.profile} alt="" />
          </Col>
          <Col>
            <ListGroup className="fs-3 mt-5 p-5 bg-primary">
              <ListGroup.Item className="mt-3">Name:  {singleData.name}</ListGroup.Item>
              <ListGroup.Item className="mt-3" >Email: {singleData.email}</ListGroup.Item>
              <ListGroup.Item className="mt-3">Mobile: {singleData.mobile}</ListGroup.Item>
              <ListGroup.Item className="mt-3">Location: {singleData.location}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default SingleView;
