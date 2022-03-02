import { EventInput } from '@fullcalendar/vue3';

let eventGuid = 0;
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  //   {
  //     id: createEventId(),
  //     title: 'All-day event',
  //     start: todayStr
  //   },
  {
    id: createEventId(),
    title: 'sadsa eventasdasf',
    start: '2021-09-01' + 'T12:00:00',
  },

  {
    id: createEventId(),
    title: 'Test 1',
    start: '2021-09-06' + 'T12:00:00',
  },

  {
    id: createEventId(),
    title: 'Test 2',
    start: '2021-09-08' + 'T10:00:00',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
