'use client'

import { signIn } from "next-auth/react";
import styles from "./dani.module.css";

export default function Dani() {
  const handleConnectGoogle = async () => {
    await signIn('google')
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Hello Page Dani</h1>
        <p>This connection is using Next Auth</p>
        <button type="button" onClick={handleConnectGoogle}>
          Conectar to Githgub
        </button>
      </main>
    </div>
  );
}
