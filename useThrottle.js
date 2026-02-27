import { useEffect, useRef, useState } from "react";

export function useThrottle(value, limit = 300) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(0);

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= limit) {
      setThrottledValue(value);
      lastExecuted.current = now;
    }
  }, [value, limit]);

  return throttledValue;
}