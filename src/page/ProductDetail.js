import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let{id} =useParams();
  const[product,setProduct]=useState(null);
  const getProductDetail=async()=>{
    let url=`https://my-json-server.typicode.com/hyjin1234/hnm-react-router-pratice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container className="content-style">
      <Row>
        <Col>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div className="padding">₩{product?.price}</div>
          <div className="padding">
            {product?.choice == true?"Consciout choice":""}
          </div>
          <div className="padding">
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
          </DropdownButton>
          </div>
          <div className="padding">
            <Button variant="dark" className="botton-size">
              추가
            </Button>
          </div>
          
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail