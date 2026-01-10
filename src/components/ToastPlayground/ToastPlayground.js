import React, { useContext, useEffect, useState } from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { addToast } = useContext(ToastContext);

  const [alertVariant, setAlertVariant] = useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (message.length >= 4) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [message]);

  function handleSubmit(event) {
    event.preventDefault();
    addToast(message, alertVariant);
    setShowToast(true);
    setAlertVariant(VARIANT_OPTIONS[0]);
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
              <Button disabled={disabled}>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
