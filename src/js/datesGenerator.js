// generate dates objects with propertis of date and isHoliday is active month

const generateDates = (month, year) => {
    const dates = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const lastDateOfPreviousMonth = new Date(year, month, 0).getDate();
    const lastDayOfPreviousMonth = new Date(year, month, 0).getDay();
    const firstMonday = lastDateOfPreviousMonth - lastDayOfPreviousMonth + 1;

    function pushDate(date) {
        const formatedDate = date.toISOString().slice(0, 10);
        const isHoliday = date.getDay() === 0 || date.getDay() === 6;
        const events = [];
        const isCurrentMonth = date.getMonth() === month;
        dates.push({ date: formatedDate, events, isHoliday, isCurrentMonth });
    }

    for (let i = firstMonday; i <= lastDateOfPreviousMonth; i++) {
        const date = new Date(year, month - 1, i);
        pushDate(date);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        pushDate(date);
    }

    if (lastDay !== 0) {
        for (let i = 1; i <= 7 - lastDay; i++) {
            const date = new Date(year, month + 1, i);
            pushDate(date);
        }
    }

    return dates;
};

export default generateDates;

// generate calendar with dates