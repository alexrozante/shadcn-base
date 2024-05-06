"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export default function ThemeButton() {
  const { setTheme } = useTheme();
  const [btnText, setBtnText] = useState("Light");

  function toogleTheme() {
    if (btnText == "Dark") {
      setBtnText("Light");
      setTheme("light");
    } else {
      setBtnText("Dark");
      setTheme("dark");
    }
  }

  return (
    <Button onClick={() => toogleTheme()}>
      {btnText}
    </Button>
  )
}
