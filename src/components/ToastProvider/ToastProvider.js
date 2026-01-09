import React, { useState } from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toastArray, setToastArray] = useState([]);

  function addToast(message, alertVariant) {
    const nextToasts = [
      ...toastArray,
      {
        id: crypto.randomUUID(),
        message,
        alertVariant,
      },
    ];

    setToastArray(nextToasts);
  }

  function deleteToast(id) {
    setToastArray((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider
      value={{
        toastArray,
        setToastArray,
        deleteToast,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
