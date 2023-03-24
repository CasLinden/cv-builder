import { useRef, useEffect } from "react";

function useClickOutsideSubmit(onSubmit) {
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

  return ref;
}

export default useClickOutsideSubmit;
