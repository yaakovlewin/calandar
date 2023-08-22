import hebcal from './hebcal-API';
import generateDateRange from './getDateRange2';
import { isToday, isFriday, isSaturday } from 'date-fns'; // Import necessary date-fns functions
import { DateTime } from 'luxon'; // Import DateTime from Luxon

const generateDates = async (month, year) => {
    const dates = [];

    const { firstDayToDisplay, lastDayToDisplay } = generateDateRange(month, year);

    const formattedFirstDayToDisplay = DateTime.fromJSDate(firstDayToDisplay);
    const formattedLastDayToDisplay = DateTime.fromJSDate(lastDayToDisplay);

    const hebDates = await hebcal(
        formattedFirstDayToDisplay.toISO(),
        formattedLastDayToDisplay.toISO()
    );
    const hebDatesObj = hebDates.hdates;

    let currentDatePointer = formattedFirstDayToDisplay;

    while (currentDatePointer <= formattedLastDayToDisplay) {
        const formattedDate = currentDatePointer.startOf('day');

        const isTodayFlag = isToday(formattedDate.toJSDate());
        const hebDate = hebDatesObj[formattedDate.toISODate()];
        const isHoliday = isFriday(formattedDate.toJSDate()) || isSaturday(formattedDate.toJSDate()) || hebDate?.events?.length > 0;
        const isCurrentMonth = currentDatePointer.month === month + 1;

        dates.push({
            date: formattedDate.toISODate(),
            isToday: isTodayFlag,
            events: [],
            isHoliday,
            isCurrentMonth,
            hebDate,
        });

        currentDatePointer = currentDatePointer.plus({ days: 1 });
    }

    return dates;
};

export default generateDates;

