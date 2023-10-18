import { Modal } from "antd";
import React from "react";

function ModalComponent({
  title = "modal",
  isOpen = false,
  children,
  ...rests
}) {
  return (
    <div>
      <Modal title={title} open={isOpen} {...rests}>
        {children}
      </Modal>
    </div>
  );
}

export default ModalComponent;
