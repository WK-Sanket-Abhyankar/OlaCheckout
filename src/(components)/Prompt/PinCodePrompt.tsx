import React from "react";
import style from "./promt.module.css";
import { createPortal } from "react-dom";

interface IPinCodePrompts {
  onClose: () => void;
}

export default function PinCodePrompt(props: IPinCodePrompts) {
  const { onClose } = props;
  function JSX() {
    return (
      <div className={style.backdrop} onClick={onClose}>
        <div
          className={style.p_container_card}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.p_container_card_title}>
            <h3>Enter your registration PIN Code</h3>
            <h4>
              Scooter price depends on PIN Code. For registration, PIN Code
              should be as per your address proofs
            </h4>
          </div>
          <input type="text" placeholder="PIN Code" className={style.p_input} />
          <button className={style.p_container_card_button} disabled>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return createPortal(<JSX />, document.body);
}
