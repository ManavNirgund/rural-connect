import React from "react";
import { Toast } from "react-bootstrap";

const NoAuthToast = () => {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Log in</strong>
      </Toast.Header>
      <Toast.Body>You need to log in in order enjoy the perks</Toast.Body>
    </Toast>
  );
};

export default NoAuthToast;
