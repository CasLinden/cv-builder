import { useEffect, useRef } from "react";

export default function Submit(onSubmit) {
  const ref = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (onSubmit) {
          onSubmit(ref.current.innerHTML);
          ref.current.blur()
        }
      }
    };

    if (ref.current) {
      ref.current.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [onSubmit]);

  return ref;
}


  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  //   console.log("saved to localStorage");
  // }, [user]);