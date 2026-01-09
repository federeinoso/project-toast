import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastArray, deleteToast } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastArray.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.alertVariant}
            message={toast.message}
            deleteToast={deleteToast}
            id={toast.id}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
