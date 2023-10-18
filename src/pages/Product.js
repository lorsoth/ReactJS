import { Avatar, Rate, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { getProducts } from '../api';

function Product() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() =>{
    setLoading(true);
    getProducts().then((res)=>{
      setDataSource(res.products);
      setLoading(false);
    });
  },[]);
  return (
    <>
      <h5>List of Products</h5>
      <Table
        loading = {loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Product ID",
            dataIndex: "id",
          },
          {
            title: "Product Name",
            dataIndex: "title",
          },
          {
            title: "Price (US$)",
            dataIndex: "price",
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 6
        }}
      ></Table>
    </>
  )
}

export default Product;