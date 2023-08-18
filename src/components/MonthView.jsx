import { ClockIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

// import { days } from "../data/days";
import generateDates from "../js/datesGenerator";
import CalendarHeader from "./CalendarHeader";
import MonthCalendar from "./MonthCalendar";
import { h } from "@fullcalendar/core/preact";

// const days = generateDates(0, 2022);
// console.log(days);

// const days = [
//     { date: "2021-12-27", events: [] },
//     { date: "2021-12-28", events: [] },
//     { date: "2021-12-29", events: [] },
//     { date: "2021-12-30", events: [] },
//     { date: "2021-12-31", events: [] },
//     { date: "2022-01-01", isCurrentMonth: true, events: [] },
//     { date: "2022-01-02", isCurrentMonth: true, events: [] },
//     {
//         date: "2022-01-03",
//         isCurrentMonth: true,
//         events: [
//             {
//                 id: 1,
//                 name: "Design review",
//                 time: "10AM",
//                 datetime: "2022-01-03T10:00",
//                 href: "#",
//             },
//             {
//                 id: 2,
//                 name: "Sales meeting",
//                 time: "2PM",
//                 datetime: "2022-01-03T14:00",
//                 href: "#",
//             },
//         ],
//     },
//     { date: "2022-01-04", isCurrentMonth: true, events: [] },
//     { date: "2022-01-05", isCurrentMonth: true, events: [] },
//     { date: "2022-01-06", isCurrentMonth: true, events: [] },
//     {
//         date: "2022-01-07",
//         isCurrentMonth: true,
//         events: [
//             {
//                 id: 3,
//                 name: "Date night",
//                 time: "6PM",
//                 datetime: "2022-01-08T18:00",
//                 href: "#",
//             },
//         ],
//     },
//     { date: "2022-01-08", isCurrentMonth: true, events: [] },
//     { date: "2022-01-09", isCurrentMonth: true, events: [] },
//     { date: "2022-01-10", isCurrentMonth: true, events: [] },
//     { date: "2022-01-11", isCurrentMonth: true, events: [] },
//     {
//         date: "2022-01-12",
//         isCurrentMonth: true,
//         isToday: true,
//         events: [
//             {
//                 id: 6,
//                 name: "Sam's birthday party",
//                 time: "2PM",
//                 datetime: "2022-01-25T14:00",
//                 href: "#",
//             },
//         ],
//     },
//     { date: "2022-01-13", isCurrentMonth: true, events: [] },
//     { date: "2022-01-14", isCurrentMonth: true, events: [] },
//     { date: "2022-01-15", isCurrentMonth: true, events: [] },
//     { date: "2022-01-16", isCurrentMonth: true, events: [] },
//     { date: "2022-01-17", isCurrentMonth: true, events: [] },
//     { date: "2022-01-18", isCurrentMonth: true, events: [] },
//     { date: "2022-01-19", isCurrentMonth: true, events: [] },
//     { date: "2022-01-20", isCurrentMonth: true, events: [] },
//     { date: "2022-01-21", isCurrentMonth: true, events: [] },
//     {
//         date: "2022-01-22",
//         isCurrentMonth: true,
//         isSelected: true,
//         events: [
//             {
//                 id: 4,
//                 name: "Maple syrup museum",
//                 time: "3PM",
//                 datetime: "2022-01-22T15:00",
//                 href: "#",
//             },
//             {
//                 id: 5,
//                 name: "Hockey game",
//                 time: "7PM",
//                 datetime: "2022-01-22T19:00",
//                 href: "#",
//             },
//         ],
//     },
//     { date: "2022-01-23", isCurrentMonth: true, events: [] },
//     { date: "2022-01-24", isCurrentMonth: true, events: [] },
//     { date: "2022-01-25", isCurrentMonth: true, events: [] },
//     { date: "2022-01-26", isCurrentMonth: true, events: [] },
//     { date: "2022-01-27", isCurrentMonth: true, events: [] },
//     { date: "2022-01-28", isCurrentMonth: true, events: [] },
//     { date: "2022-01-29", isCurrentMonth: true, events: [] },
//     { date: "2022-01-30", isCurrentMonth: true, events: [] },
//     { date: "2022-01-31", isCurrentMonth: true, events: [] },
//     { date: "2022-02-01", events: [] },
//     { date: "2022-02-02", events: [] },
//     { date: "2022-02-03", events: [] },
//     {
//         date: "2022-02-04",
//         events: [
//             {
//                 id: 7,
//                 name: "Cinema with friends",
//                 time: "9PM",
//                 datetime: "2022-02-04T21:00",
//                 href: "#",
//             },
//         ],
//     },
//     { date: "2022-02-05", events: [] },
//     { date: "2022-02-06", events: [] },
// ];
// const selectedDay = days.find((day) => day.isSelected);

function classNames(...classes) {
    // function to add multiple classes
    return classes.filter(Boolean).join(" ");
}

export default function MonthView() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(
        selectedDate.getFullYear()
    );
    const [days, setDays] = useState(
        [...Array(42)].map((_, i) => ({
            date: "2021-12-27" + i,
            events: [],
            hebDate: { heDateParts: { d: i } },
        }))
    );
    const [selectedDay, setSelectedDay] = useState(
        days.find((day) => day.isSelected)
    );

    useEffect(() => {
        const fetchDays = async () => {
            const days = await generateDates(selectedMonth, selectedYear);
            setDays(days);
            console.log(days);
            // setSelectedDay(days.find((day) => day.isSelected));
            // check id day is today
        };
        fetchDays();
    }, [selectedMonth, selectedYear]);

    function handleDateChange(date) {
        setSelectedDate(date);
        setSelectedMonth(date.getMonth());
        // setSelectedYear(date.getFullYear());
        // setDays(generateDates(date.getMonth(), date.getFullYear()));
        // setSelectedDay(days.find((day) => day.isSelected));
    }

    function handleMonthChange(month) {
        setSelectedMonth(month);
        // setDays(generateDates(month, selectedYear));
        // setSelectedDay(days.find((day) => day.isSelected));
    }

    function handleYearChange(year) {
        setSelectedYear(year);
        setDays(generateDates(selectedMonth, year));
        setSelectedDay(days.find((day) => day.isSelected));
    }

    function handleDayClick(day) {
        setSelectedDay(day);
    }

    function handleDayDoubleClick(day) {
        console.log("double click");
    }

    function handleDayRightClick(day) {
        console.log("right click");
    }

    function handlePrevMonthClick() {
        handleMonthChange(selectedMonth - 1);
        console.log(selectedMonth);
    }

    function handleNextMonthClick() {
        handleMonthChange(selectedMonth + 1);
    }

    function handlePrevYearClick() {
        handleYearChange(selectedYear - 1);
    }

    function handleNextYearClick() {
        handleYearChange(selectedYear + 1);
    }

    function handleTodayClick() {
        handleDateChange(new Date());
    }

    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <CalendarHeader
                handlePrevMonthClick={handlePrevMonthClick}
                handleNextMonthClick={handleNextMonthClick}
                handlePrevYearClick={handlePrevYearClick}
                handleNextYearClick={handleNextYearClick}
                handleTodayClick={handleTodayClick}
                handleMonthChange={handleMonthChange}
                handleYearChange={handleYearChange}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                hebDate={[days[0].hebDate, days[days.length - 1].hebDate]}
            />
            <MonthCalendar days={days} classNames={classNames} />

            {selectedDay?.events.length > 0 && (
                <div className="px-4 py-10 sm:px-6 lg:hidden">
                    <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                        {selectedDay.events.map((event) => (
                            <li
                                key={event.id}
                                className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                            >
                                <div className="flex-auto">
                                    <p className="font-semibold text-gray-900">
                                        {event.name}
                                    </p>
                                    <time
                                        dateTime={event.datetime}
                                        className="mt-2 flex items-center text-gray-700"
                                    >
                                        <ClockIcon
                                            className="mr-2 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        {event.time}
                                    </time>
                                </div>
                                <a
                                    href={event.href}
                                    className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
                                >
                                    Edit
                                    <span className="sr-only">
                                        , {event.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}
