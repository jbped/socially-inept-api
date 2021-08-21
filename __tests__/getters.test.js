const dateFormat = require("../utils/getters");

test("dateFormat returns date MM/DD/YYYY HH:MM:SS", () => {
    let date = "Fri Dec 20 2021 09:43:39 GMT-0600 (Mountain Daylight Time)"
    expect(dateFormat(date)).toBe("12/20/2021 15:43:39 UTC")
})

test("dateFormat returns date MM/DD/YYYY HH:MM:SS", () => {
    let date = "Fri Aug 20 2021 09:43:39 GMT-0600 (Mountain Daylight Time)"
    expect(dateFormat(date)).toBe("08/20/2021 15:43:39 UTC")
})