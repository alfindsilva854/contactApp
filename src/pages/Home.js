import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContCard from '../components/ContCard'
import { Col, Row } from 'react-bootstrap'


function Home() {

    const [contacts,setContacts]=useState([])


    const fetchData=async()=>{
        const result=await axios.get('/contacts.json')
        setContacts(result.data.contacts);
    }
    useEffect(()=>{
        fetchData()
    },[])

    console.log(contacts);

  return (
    <div>
        <Row className='mt-5 p-5'>
            <Col>
            <h1 className='mt-3 mb-5' >Click Me For More Details</h1>
            <p className='w-100 fs-5'>The Contacts Provider is a powerful and flexible Android component that manages the device's central repository of data about people. The Contacts Provider is the source of data you see in the device's contacts application, and you can also access its data in your own application and transfer data between the device and online services. The provider accommodates a wide range of data sources and tries to manage as much data as possible for each person, with the result that its organization is complex. Because of this, the provider's API includes an extensive set of contract classes and interfaces that facilitate both data retrieval and modification.</p>
            </Col>
            <Col className='ps-5 ms-5'>
            <img src="https://i.postimg.cc/y6P4DT71/IST-37288-03250-removebg-preview.png" alt="" />
            </Col>
           
        </Row>
       
        <Row className='mt-3 pt-3'>
            {
                contacts.map(i=>(
                   <Col className='ms-5 mt-5 p-5' lg={3} md={4} sm={6}>
                    <ContCard item={i}></ContCard>
                   </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default Home