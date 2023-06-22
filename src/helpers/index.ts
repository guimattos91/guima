export const myCustomHelper = (): null => null

export const isDayTime = (): boolean => {
  const dateNow = new Date()
  const hoursNow = dateNow.getHours()
  const isDay = !!(hoursNow < 18 && hoursNow > 9)
  return isDay
}
