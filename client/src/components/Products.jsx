import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from './ProductCard';
import { useEffect, useState } from "react";
import axios from "axios";



const Container = styled.div`
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({category, filters, sort}) => {
  // console.log(category, filters, sort) IT WORKS

  return (
    <Container>
      {popularProducts.map(item=> (
        <ProductCard item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products