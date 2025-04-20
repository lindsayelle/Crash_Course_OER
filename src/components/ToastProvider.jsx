"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      newestOnTop={false} 
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{
        backgroundColor: "var(--noteboxes-bg)",
        color: "var(--foreground)",
        borderRadius: "8px",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontSize: "0.95rem"
      }}
    />
  );
}
