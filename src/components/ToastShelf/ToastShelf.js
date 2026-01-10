import React from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastArray } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastArray.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.alertVariant}
            message={toast.message}
            id={toast.id}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
