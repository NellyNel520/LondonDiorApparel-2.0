import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from './ProductCard';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../global'



const Container = styled.div`
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({category, filters, sort}) => {
  // console.log(category, filters, sort) IT WORKS
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `${BASE_URL}/products/?category=${category}`
            : `${BASE_URL}/products`
        );
        console.log(res)
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);




  return (
    <Container>
      {popularProducts.map(item=> (
        <ProductCard item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products