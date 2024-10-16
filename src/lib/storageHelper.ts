import "client-only";

export function getLocalStorage(key: string, defaultValue: any) {
  // localStorage is not defined on the server
  if (typeof window === "undefined") return defaultValue;

  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
