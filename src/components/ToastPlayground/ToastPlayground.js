import React, { useContext, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { addToast } = useContext(ToastContext);

  const [alertVariant, setAlertVariant] = useState("notice");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    addToast(message, alertVariant);
    setShowToast(true);
    setAlertVariant("notice");
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && <ToastShelf />}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <div key={variant}>
                  <label htmlFor={`variant-${variant}`}>
                    <input
                      type="radio"
                      name="variant"
                      id={`variant-${variant}`}
                      value={variant}
                      checked={variant === alertVariant}
                      onChange={(event) => {
                        setAlertVariant(event.target.value);
                      }}
                    />
                    {variant}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
