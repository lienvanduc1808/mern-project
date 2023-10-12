import { Divider, Radio, Table } from "antd";
import React, { useState } from "react";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

function TableComponent(props) {
  const {
    selectionType = "checkbox",
    data = [],
    isLoading,
    columns = [],
  } = props;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <LoadingComponent isLoading={isLoading}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </LoadingComponent>
  );
}

export default TableComponent;
