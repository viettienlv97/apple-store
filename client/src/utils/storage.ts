export const getItem = (key: string, initial: any) => {
  const item: string | null = localStorage.getItem(key)
  if (item) return JSON.parse(item)
  return initial
}

export const setItem = (key: string, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload))
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key)
}
