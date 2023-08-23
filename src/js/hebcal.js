// Description: This file contains the function that gets the data from hebcal.com
import { HebrewCalendar, HDate, Location, Event } from '@hebcal/core';

const hebcal = async (firstDate, lastDate) => {
    const location = Location.lookup('Jerusalem');
    const startDate = new Date(firstDate);
    const endDate = new Date(lastDate);
    const events = await HebrewCalendar.calendar({
        start: startDate,
        end: endDate,
        sedrot: true,
        location: location,
        il: true,
        candlelighting: true,
        omer: true,
        parashot: true,
        holidays: true,
        hebrew: true,
        greg: true,
        major: true,
        minor: true,
        modern: true,
        roshChodesh: true,
        omerCount: true,
        showHolidays: true,
        showParashah: true,
        showSedrot: true,
        showOmer: true,
        showHebrew: true,
        showModern: true,
        showRoshChodesh: true,
        showGreg: true,
        showMajor: true,
        showMinor: true,
        showLagBaOmer: true,
        showOmerCount: true,
        showHavdalah: true,
        showCandlelighting: true,
        showShabbat: true,
        showDafYomi: true,
        showHebSedrot: true,
        showHebHolidays: true,
        showHebParashah: true,
        showHebOmer: true,
        showHebRoshChodesh: true,
        showHebDafYomi: true,
        showHebCandlelighting: true,
        showHebHavdalah: true,
        showHebShabbat: true,
        showHebLagBaOmer: true,
        showHebOmerCount: true,
        showHebMinor: true,
        showHebGreg: true,
        showHebMajor: true,
        showHebModern: true,
        showHeb: true,
        showIl: true,
        showLocation: true,
        showLink: true,
        showGeo: true,
        showZmanim: true,
        showNotes: true,
        showShabbatTimes: true,
        showShabbatCandlelighting: true,
        showShabbatHavdalah: true,
        showShabbatShalom: true,
        showShabbatParashah: true,
        showShabbatHolidays: true,
        showShabbatDafYomi: true,
        showShabbatOmer: true,
        showShabbatRoshChodesh: true,
        showShabbatLagBaOmer: true,
        showShabbatOmerCount: true,
        showShabbatMinor: true,
        showShabbatGreg: true,
        showShabbatMajor: true,
        showShabbatModern: true,
        showShabbatZmanim: true,
        showShabbatNotes: true,
        showShabbat: true,
        showShabbatGeo: true,
        showShabbatLink: true,
        showShabbatIl: true,
        showShabbatLocation: true,
        showShabbatHebrew: true,
        showShabbatHolidaysHebrew: true,
        showShabbatParashahHebrew: true,
        showShabbatOmerHebrew: true,
        showShabbatRoshChodeshHebrew: true,
        showShabbatDafYomiHebrew: true,
        showShabbatCandlelightingHebrew: true,
        showShabbatHavdalahHebrew: true,
        showShabbatShalomHebrew: true,
        showShabbatLagBaOmerHebrew: true,
        showShabbatOmerCountHebrew: true,
        showShabbatMinorHebrew: true,
        showShabbatGregHebrew: true,
        showShabbatMajorHebrew: true,
        showShabbatModernHebrew: true
    });
    const hebcalEvents = events.items.map((event) => {
        const hebDate = new HDate(event.date);

        const hebDateObj = {
            events: [],
            eventsHebrew: [],
            eventsHebrewTranslit: [],
            eventsHebrewLiturgical: [],
            eventsHebrewLiturgicalTranslit: [],
            eventsHebrewModern: [],
            eventsHebrewModernTranslit: [],
            eventsHebrewModernLiturgical: [],
            eventsHebrewModernLiturgicalTranslit: []
        };


        if (event.category === 'holiday') {
            hebDateObj.events.push(event.desc);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewModern.push(event.titleModern);
            hebDateObj.eventsHebrewModernTranslit.push(event.titleModernTranslit);
            hebDateObj.eventsHebrewModernLiturgical.push(event.titleModernLiturgical);
            hebDateObj.eventsHebrewModernLiturgicalTranslit.push(event.titleModernLiturgicalTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsTranslit.push(event.descTranslit);
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'candles') {
            hebDateObj.events.push(event.desc);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewModern.push(event.titleModern);
            hebDateObj.eventsHebrewModernTranslit.push(event.titleModernTranslit);
            hebDateObj.eventsHebrewModernLiturgical.push(event.titleModernLiturgical);
            hebDateObj.eventsHebrewModernLiturgicalTranslit.push(event.titleModernLiturgicalTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsTranslit.push(event.descTranslit);
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'parashat') {
            hebDateObj.events.push(event.desc);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewModern.push(event.titleModern);
            hebDateObj.eventsHebrewModernTranslit.push(event.titleModernTranslit);
            hebDateObj.eventsHebrewModernLiturgical.push(event.titleModernLiturgical);
            hebDateObj.eventsHebrewModernLiturgicalTranslit.push(event.titleModernLiturgicalTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsTranslit.push(event.descTranslit);
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'omer') {
            hebDateObj.events.push(event.desc);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewModern.push(event.titleModern);
            hebDateObj.eventsHebrewModernTranslit.push(event.titleModernTranslit);
            hebDateObj.eventsHebrewModernLiturgical.push(event.titleModernLiturgical);
            hebDateObj.eventsHebrewModernLiturgicalTranslit.push(event.titleModernLiturgicalTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsTranslit.push(event.descTranslit);
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'roshchodesh') {
            hebDateObj.events.push(event.desc);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewModern.push(event.titleModern);
            hebDateObj.eventsHebrewModernTranslit.push(event.titleModernTranslit);
            hebDateObj.eventsHebrewModernLiturgical.push(event.titleModernLiturgical);
            hebDateObj.eventsHebrewModernLiturgicalTranslit.push(event.titleModernLiturgicalTranslit);
            hebDateObj.eventsHebrewLiturgical.push(event.titleLiturgical);
            hebDateObj.eventsHebrewLiturgicalTranslit.push(event.titleLiturgicalTranslit);
            hebDateObj.eventsHebrewTranslit.push(event.titleTranslit);
            hebDateObj.eventsHebrew.push(event.title);
            hebDateObj.eventsTranslit.push(event.descTranslit);
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'dafyomi') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'minor') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'modern') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'major') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'lagbaomer') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'havdalah') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'shabbat') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'zmanim') {
            hebDateObj.events.push(event.desc);
            hebDateObj.eventsHebrew.push(event.title);
        }
        if (event.category === 'notes') {
            hebDateObj.events.push(event.desc);
        }
        if (event.category === 'shabbatTimes') {
            hebDateObj.events.push(event.desc);
        }

        return {
            date: event.date,
            hebDate: hebDateObj
        };
    });
    return hebcalEvents;
};

export default hebcal;