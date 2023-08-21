// Function to get the first and last day of the current month
function getMonthRange(year, month) {
    const lastMonth = month === 11 ? 0 : month + 1;
    const lastYear = month === 11 ? year + 1 : year;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(lastYear, lastMonth, 0);

    return { firstDay, lastDay };
}


// Function to get the Monday before a given date and the Sunday after a given date
function getWeekRange(firstDay, lastDay) {
    const mondayBefore = new Date(firstDay);
    mondayBefore.setDate(firstDay.getDate() - (firstDay.getDay() === 6 ? 6 : firstDay.getDay()));

    const sundayAfter = new Date(lastDay);
    sundayAfter.setDate(lastDay.getDate() + (lastDay.getDay() === 6 ? 0 : 6 - lastDay.getDay()));

    return { mondayBefore, sundayAfter };
}


// Function to generate the date range
function generateDateRange(month, year) {
    const { firstDay, lastDay } = getMonthRange(year, month);
    const { mondayBefore, sundayAfter } = getWeekRange(firstDay, lastDay);

    return { firstDayToDisplay: mondayBefore, lastDayToDisplay: sundayAfter };
}

export default generateDateRange;
