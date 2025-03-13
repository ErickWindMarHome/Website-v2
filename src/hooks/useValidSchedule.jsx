import { useState, useEffect } from 'react'

// Uso del Hook, pasarle un arreglo con los días y horarios válidos
// const isValidSchedule = useValidSchedule([
//   { days: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'], schedule: [7, 17] },
//   { days: ['sábado'], schedule: [8, 17] },
// ])

const diasSemana = {
  domingo: 0,
  lunes: 1,
  martes: 2,
  miércoles: 3,
  jueves: 4,
  viernes: 5,
  sábado: 6,
}

const useValidSchedule = (customSchedule = null) => {
  const [isValidSchedule, setIsValidSchedule] = useState(false)

  useEffect(() => {
    const hourUTC = new Date()
    const hourPR = new Date(hourUTC.toUTCString())

    const hour = hourPR.getHours()
    const day = hourPR.getDay()

    const defaultSchedule = [
      { days: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'], schedule: [7, 17] },
      { days: ['sábado'], schedule: [8, 17] },
    ]

    const schedule = customSchedule || defaultSchedule

    const isValid = schedule.some(({ days, schedule }) => {
      const validDays = days.map((d) => diasSemana[d.toLowerCase()])
      const [startHour, endHour] = schedule
      return validDays.includes(day) && hour >= startHour && hour < endHour
    })

    setIsValidSchedule(isValid)
  }, [customSchedule])

  return isValidSchedule
}

export default useValidSchedule
