import calculateDaysBetweenDates from "./calculateDaysBetweenDates";
import masechtot from "./masectot";

export default function getStudyScheduleEvent(startDate, date) {
    const daysBetweenDates = calculateDaysBetweenDates(startDate, date);
    if (date.getDay() !== 5 && date.getDay() !== 6) {
        const studyDays = daysBetweenDates / 7 * 5 + daysBetweenDates % 7;
        let pages = 0;
        var masechet = "";
        var page = 0;
        for (let i = 0; pages + masechtot[i].pages * 2 < studyDays; i++) {
            pages += masechtot[i].pages * 2;
            masechet = masechtot[i + 1].name;
            page = studyDays - pages;
        }
    }

    let daf = Math.floor(page / 2) + 1;
    let amud = page % 2 === 0 ? "a" : "b";



    const studyScheduleEvent = {
        title: "Study Schedule",
        start: date,
        end: date,
        allDay: true,
        backgroundColor: "#f1c40f",
        borderColor: "#f1c40f",
        textColor: "#000000",
        display: "background",
        extendedProps: {
            studySchedule: {
                masechet: masechet,
                daf: daf,
                amud: amud
            }
        }
    };

    return studyScheduleEvent;
}