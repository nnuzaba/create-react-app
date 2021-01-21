import React, { useEffect, useRef } from "react";

function useListener(ref, eventName, handler) {
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.addEventListener(eventName, handler)
      return () => element.removeEventListener(eventName, handler)
    }
  }, [eventName, handler, ref])
}

export function DatePicker({
  onChange,
  onFocus,
  onBlur,
  ...props
}) {

  const ref = useRef(null)

  useListener(ref, "duetChange", onChange)
  useListener(ref, "duetFocus", onFocus)
  useListener(ref, "duetBlur", onBlur)

  return (
    <duet-date-picker ref={ref} {...props} />
  );
}