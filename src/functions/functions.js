export const getCountTransfer = (i) => {
    if (i === 0) return "Без пересадок"
    if (i === 1) return '1 Пересадка'
    if (i >= 2) return `${i} Пересадки`
}

export const getCompanyName = (i) => {
    if (i === "EK") return 'Emirates'
    if (i === "EY") return 'Etihad'
    if (i === "TG") return `THAI`
    if (i === "MH") return `Malaysia`
    if (i === "SU") return `AEROFLOT`
    if (i === "FV") return `ROSSIYA`
    if (i === "S7") return `S7`
}
