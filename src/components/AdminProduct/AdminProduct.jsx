import React, { useEffect, useState } from "react";
import "./AdminProduct.scss";
import { Button, Checkbox, Form, Input, Modal, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import { getBase64 } from "../../utils";
import * as ProductService from "../../services/ProductService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { useQueries, useQuery } from "@tanstack/react-query";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
function AdminProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateProduct, setStateProduct] = useState({
    name: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    type: "",
    countInStock: "",
  });

  const mutation = useMutationHooks((data) => {
    const { name, price, description, rating, image, type, countInStock } =
      data;

    const res = ProductService.createProduct({
      name,
      price,
      description,
      rating,
      image,
      type,
      countInStock,
    });
    return res;
  });

  const handleOnChange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    });
    console.log("stateProduct", stateProduct);
  };
  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res", res);
    return res;
  };

  const { data, isLoading, isSuccess, isError } = mutation;

  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined
          style={{ fontSize: "30px", color: "red", cursor: "pointer" }}
        />
        <EditOutlined
          style={{ fontSize: "30px", color: "orange", cursor: "pointer" }}
        />
      </div>
    );
  };

  const { data: products, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: renderAction,
    },
  ];
  const dataTable = products?.data?.map((product) => {
    return { ...product, key: product._id };
  });
  useEffect(() => {
    if (isSuccess && data.status === "OK") {
      message.success();
      handleCancel();
    } else if (isError) {
      message.isError();
    }
  }, [isSuccess, isError]);
  const [form] = Form.useForm();
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: "",
      price: "",
      description: "",
      rating: "",
      image: "",
      type: "",
      countInStock: "",
    });
    form.resetFields();
  };
  const onFinish = () => {
    mutation.mutate(stateProduct);
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];

    file.preview = await getBase64(file.originFileObj);

    setStateProduct({
      ...stateProduct,
      image: file.preview,
    });
  };
  return (
    <div>
      <div className="WrapperHeader">Quản lý sản phẩm </div>
      <Button
        className="AddUser"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <PlusOutlined className="AddIcon" />
      </Button>
      <div className="TableUser">
        <TableComponent
          columns={columns}
          isLoading={isLoadingProduct}
          data={dataTable}
        />
      </div>
      <Modal
        title="Tạo sản phẩm "
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <LoadingComponent isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              label="Name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <InputComponent
                value={stateProduct.name}
                onChange={handleOnChange}
                name="name"
              />
            </Form.Item>

            <Form.Item
              label="Type"
              name="Type"
              rules={[
                {
                  required: true,
                  message: "Please input your type!",
                },
              ]}
            >
              <InputComponent
                value={stateProduct.type}
                onChange={handleOnChange}
                name="type"
              />
            </Form.Item>

            <Form.Item
              label="Count InStock"
              name="CountInStock"
              rules={[
                {
                  required: true,
                  message: "Please input your count instock!",
                },
              ]}
            >
              <InputComponent
                value={stateProduct.countInStock}
                onChange={handleOnChange}
                name="countInStock"
              />
            </Form.Item>

            <Form.Item
              label="Price"
              name="Price"
              rules={[
                {
                  required: true,
                  message: "Please input your price!",
                },
              ]}
            >
              <InputComponent
                value={stateProduct.price}
                onChange={handleOnChange}
                name="price"
              />
            </Form.Item>

            <Form.Item
              label="Rating"
              name="Rating"
              rules={[
                {
                  required: true,
                  message: "Please input your rating!",
                },
              ]}
            >
              <InputComponent
                value={stateProduct.rating}
                onChange={handleOnChange}
                name="rating"
              />
            </Form.Item>

            <Form.Item
              label="Description"
              name="Description"
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              <InputComponent
                value={stateProduct.description}
                onChange={handleOnChange}
                name="description"
              />
            </Form.Item>
            <Form.Item
              label="Image"
              name="image"
              rules={[
                { required: true, message: "Please input your count image!" },
              ]}
            >
              <Upload
                onChange={handleOnchangeAvatar}
                className="upload_image"
                maxCount={1}
              >
                <Button>Select File</Button>
                {stateProduct?.image && (
                  <img
                    src={stateProduct?.image}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                    alt="avatar"
                  />
                )}
              </Upload>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </LoadingComponent>
      </Modal>
    </div>
  );
}

export default AdminProduct;
