export const myCustomHelper = (): null => null

export const isDayTime = (): boolean => {
  const dateNow = new Date()
  const hoursNow = dateNow.getHours()
  const result = !!(hoursNow < 18 && hoursNow > 9)
  //   if (hoursNow > 18 && hoursNow < 9) result = true
  return result
}
