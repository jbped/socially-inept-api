const dateFormat = dateObj => {
    const date = new Date(dateObj);
    let month;
    if (date.getUTCMonth() + 1 < 10) {
        month = `0${date.getUTCMonth() + 1}`
    } else {
        month = `${date.getUTCMonth() + 1}`
    }
    const formattedDate = `${month}/${date.getUTCDate()}/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()} UTC`
    return formattedDate

}

module.exports = dateFormat