// Purpose: Function to generate the date range to display in the calendar

// Function to get the first and last day of the current month
function getMonthRange(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return { firstDay, lastDay };
}
// Function to get the Monday before a given date and the Sunday after a given date
function getWeekRange(firstDay, lastDay) {
    const mondayBefore = new Date(firstDay);
    mondayBefore.setDate(firstDay.getDate() - (firstDay.getDay() + 6) % 7);
    const sundayAfter = new Date(lastDay);
    sundayAfter.setDate(lastDay.getDate() + (7 - lastDay.getDay()) % 7);

    return { mondayBefore, sundayAfter };
}
// Function to generate the date range
function generateDateRange(month, year) {
    const { firstDay, lastDay } = getMonthRange(year, month);
    const { mondayBefore, sundayAfter } = getWeekRange(firstDay, lastDay);
    // round to nearest whole number in case of daylight savings time
    const daysInRange = Math.round((sundayAfter - mondayBefore) / (24 * 60 * 60 * 1000)) + 1;
    const daysToAdd = 42 - daysInRange;
    if (daysToAdd > 0) {
        sundayAfter.setDate(sundayAfter.getDate() + daysToAdd);
    }

    return { firstDayToDisplay: mondayBefore, lastDayToDisplay: sundayAfter };
}

export default generateDateRange;
