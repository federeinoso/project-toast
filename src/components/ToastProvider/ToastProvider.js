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
    const nextToastsArray = toastArray.filter((toast) => toast.id !== id);
    setToastArray(nextToastsArray);
  }

  return (
    <ToastContext.Provider
      value={{
        toastArray,
        deleteToast,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
