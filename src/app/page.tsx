import Image from "next/image";
import styles from "./page.module.css";
import Product from "@/(components)/Product/Product";
import Sidebar from "@/(components)/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image_slider}>
        <Product />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </main>
  );
}
