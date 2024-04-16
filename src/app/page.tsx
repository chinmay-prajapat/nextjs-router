"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] =
    useState<
      { userId: number; id: number; title: string; completed: boolean }[]
    >();

  useEffect(() => {
    (async () => {
      const res = await fetch("apis");
      const { data } = await res.json();
      setText(data);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <div>
        <h1>Hello</h1>
        {text?.map((i) => (
          <div key={i.userId}> {i.title}</div>
        ))}
      </div>
    </main>
  );
}
