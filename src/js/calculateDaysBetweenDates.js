const MILISECONDS_IN_DAY = 86400000;

export default function calculateDaysBetweenDates(date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    const date1Time = date1Obj.getTime();
    const date2Time = date2Obj.getTime();

    const timeDiff = Math.abs(date2Time - date1Time);

    const daysDiff = Math.ceil(timeDiff / MILISECONDS_IN_DAY);

    return daysDiff;
}