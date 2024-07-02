import style from "./sidebar.module.css";
import arrowBack from "../../../public/images/back_arrow_icon.svg";
import Image from "next/image";
import ColorSelector from "./ColorSelector";
import ModelPicker from "./ModelPicker";

export default function Sidebar() {
  return (
    <section className={style.sidebar_main_container}>
      <div className={style.sb_top_section}>
        <button className={style.sb_arrow_button}>
          <Image src={arrowBack} alt="back button" />
        </button>
        <label htmlFor="pincode" className={style.pincode_select}>
          <span>DELIVERING TO</span>
          <select name="pincode" id="pincode" className={style.select}>
            <option value="null">Pincode</option>
          </select>
        </label>
      </div>
      <div>
        <ColorSelector />
      </div>
      <div>
        <ModelPicker />
      </div>
    </section>
  );
}
