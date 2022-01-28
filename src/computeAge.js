function computeAge(birthday, currentDate) {
    bmonth = birthday.getMonth()
    month = currentDate.getMonth()
    byear = birthday.getFullYear()
    year = currentDate.getFullYear()
    bday = birthday.getDay()
    day = currentDate.getDay()

    if (year < byear) {
        return "Année de naissance impossible"
    }
    if (year == byear) {
        if (month < bmonth) {
            return "Mois de naissance impossible"
        }
        if (month == bmonth) {
            if (day > bday) {
                return "Jour de naissance impossible"
            }
        }
    }

    else {
        if (month < bmonth)
            return "Age = " + (year - byear - 1)
        if (month == bmonth) {
            if (day < bday)
                return "Age = " + (year - byear - 1)
            else
                return "Age = " + (year - byear)
        }
    }
}
module.exports = computeAge