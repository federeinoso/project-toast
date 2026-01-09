import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  variant: alertVariant,
  message,
  setShowToast,
  deleteToast,
  id,
}) {
  const CustomIcon = ICONS_BY_VARIANT[alertVariant];

  return (
    <div className={`${styles.toast} ${styles[alertVariant]}`}>
      <div className={styles.iconContainer}>
        <CustomIcon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={() => deleteToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
