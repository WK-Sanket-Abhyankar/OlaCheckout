import React from "react";
import style from "./productad.module.css";
import Image from "next/image";
import leftArrow from "../../../public/images/banner-left-arrow.svg";
import rightArrow from "../../../public/images/banner-right-arrow.svg";

export default function Product() {
  return (
    <div>
      <button>
        <Image src={leftArrow} alt="<" role="presentation" />
      </button>
      <button>
        <Image src={rightArrow} alt="<" role="presentation" />
      </button>
      <div className={style.image_container}>
        
      </div>
    </div>
  );
}
