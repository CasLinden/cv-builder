import { useRef, useEffect } from "react";

function useSubmit(onSubmit) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onSubmit(ref.current.innerText);
        ref.current.blur();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onSubmit]);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit(ref.current.innerText);
      ref.current.blur();
    }
  }

  function handleBlur() {
    onSubmit(ref.current.innerText);
  }

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    el.addEventListener("keydown", handleKeyPress);
    el.addEventListener("blur", handleBlur);
    return () => {
      el.removeEventListener("keydown", handleKeyPress);
      el.removeEventListener("blur", handleBlur);
    };
  }, [ref, handleKeyPress]);

  return { ref };
}

export default useSubmit;
