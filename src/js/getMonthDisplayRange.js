export default function getMonthDisplayRange(year, month, firstDayOfWeek) {
    function getMonthRange(year, month, firstDayOfWeek) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayOfWeekIndex = firstDay.getDay();
        const lastDayOfWeekIndex = lastDay.getDay();
        const firstDayOfWeekDiff = firstDayOfWeekIndex - firstDayOfWeek;
        const lastDayOfWeekDiff = lastDayOfWeekIndex - (firstDayOfWeek - 1);
        const firstDayOfMonthWeek = new Date(firstDay);
        const lastDayOfMonthweek = new Date(lastDay);
        firstDayOfMonthWeek.setDate(firstDay.getDate() - (firstDayOfWeekDiff < 0 ? 7 - firstDayOfWeekDiff : firstDayOfWeekDiff) % 7);
        lastDayOfMonthweek.setDate(lastDay.getDate() + (lastDayOfWeekDiff < 0 ? -lastDayOfWeekDiff : 7 - lastDayOfWeekDiff) % 7);
        return { firstDayOfMonthWeek, lastDayOfMonthweek };
    }

    function getRangeTo42(firstDayOfMonthWeek, lastDayOfMonthweek) {
        const daysInRange = Math.round((lastDayOfMonthweek - firstDayOfMonthWeek) / (24 * 60 * 60 * 1000)) + 1;
        const daysToAdd = 42 - daysInRange;
        if (daysToAdd > 0) {
            lastDayOfMonthweek.setDate(lastDayOfMonthweek.getDate() + daysToAdd);
        }
        return { firstDayToDisplay: firstDayOfMonthWeek, lastDayToDisplay: lastDayOfMonthweek };
    }

    const { firstDayOfMonthWeek, lastDayOfMonthweek } = getMonthRange(year, month, firstDayOfWeek);
    const { firstDayToDisplay, lastDayToDisplay } = getRangeTo42(firstDayOfMonthWeek, lastDayOfMonthweek);


    return { firstDayToDisplay, lastDayToDisplay };
}