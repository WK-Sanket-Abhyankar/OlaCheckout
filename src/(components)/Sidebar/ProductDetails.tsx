import React from "react";
import style from "./sidebar.module.css";
import Image from "next/image";
import info from "../../../public/images/InfoIconLight.svg";

export default function ProductDetails() {
  return (
    <div className={style.model_details_container}>
      <p>S1 Pro 2nd Generation</p>
      <div>
        <div>
          <p>CERTIFIED RANGE</p>
          <p>195km</p>
        </div>
        <div>
          <p>CERTIFIED RANGE</p>
          <p>195km</p>
        </div>
        <div>
          <p>CERTIFIED RANGE</p>
          <p>195km</p>
        </div>
      </div>
      <div>
        <p>Estimated delivery by 14th Jul 2024!</p>
        <Image src={info} alt="info" />
      </div>
    </div>
  );
}
