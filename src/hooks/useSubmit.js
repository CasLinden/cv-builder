import { useRef, useEffect } from "react";

function useSubmit(onSubmit) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onSubmit(ref.current.innerText);
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
      ref.current.blur()
    }
  }

  return { ref, handleKeyPress };
}

export default useSubmit;
