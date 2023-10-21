import { Table } from "antd";
import React, { useState, useRef } from "react";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { DownloadTableExcel } from "react-export-table-to-excel";
function TableComponent(props) {
  const tableRef = useRef(null);
  const {
    selectionType = "checkbox",
    data = [],
    isLoading,
    columns = [],
    handleDeleteMany,
  } = props;
  const [rowSelectedKeys, setRowSelectedKeys] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys);
    },
  };
  const handleDeleteAll = () => {
    handleDeleteMany(rowSelectedKeys);
  };

  return (
    <LoadingComponent isLoading={isLoading}>
      {!!rowSelectedKeys.length && (
        <div
          style={{
            background: "#1d1ddd",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleDeleteAll}
        >
          Xóa tất cả
        </div>
      )}

      <DownloadTableExcel
        filename="Datatable"
        sheet="data"
        currentTableRef={tableRef.current}
      >
        <button> Export excel </button>
      </DownloadTableExcel>

      <Table
        ref={tableRef}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </LoadingComponent>
  );
}

export default TableComponent;
