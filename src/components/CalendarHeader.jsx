import { Fragment } from "react";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
    // function to add multiple classes
    return classes.filter(Boolean).join(" ");
}

function getMonthName(month) {
    // function to get month name
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        default:
            return "December";
    }
}

export default function CalendarHeader({
    handlePrevMonthClick,
    handleNextMonthClick,
    handleTodayClick,
    handlePrevYearClick,
    handleNextYearClick,
    handleMonthChange,
    handleYearChange,
    selectedMonth,
    selectedYear,
    hebDate,
}) {
    return (
        <header className="flex items-center justify-between bg-neutral-100 border-b border-gray-200 px-6 py-4 lg:flex-none">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
                <time dateTime="2022-01">
                    {getMonthName(selectedMonth)} {selectedYear}
                </time>
            </h1>
            {hebDate && hebDate.length > 1 && (
                <h1 className="text-lg font-semibold leading-6 text-gray-900">
                    {`${hebDate[0].heDateParts.y} ${hebDate[0].heDateParts.m} - ${hebDate[1].heDateParts.m}`}
                </h1>
            )}
            <div className="flex items-center">
                <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                    <div
                        className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
                        aria-hidden="true"
                    />
                    <button
                        type="button"
                        onClick={handlePrevMonthClick}
                        className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                    >
                        <span className="sr-only">Previous month</span>
                        <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>
                    <button
                        type="button"
                        onClick={handleTodayClick}
                        className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
                    >
                        Today
                    </button>
                    <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                    <button
                        type="button"
                        onClick={handleNextMonthClick}
                        className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                    >
                        <span className="sr-only">Next month</span>
                        <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:items-center">
                    <Menu as="div" className="relative">
                        <Menu.Button
                            type="button"
                            className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Month view
                            <ChevronDownIcon
                                className="-mr-1 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Day view
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Week view
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Month view
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Year view
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <div className="ml-6 h-6 w-px bg-gray-300" />
                    <button
                        type="button"
                        className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add event
                    </button>
                </div>
                <Menu as="div" className="relative ml-6 md:hidden">
                    <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open menu</span>
                        <EllipsisHorizontalIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Create event
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Go to today
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Day view
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Week view
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Month view
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Year view
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    );
}
