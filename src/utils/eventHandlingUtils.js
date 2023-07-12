const handleDateClick = (selected) => {
  const title = prompt("Please enter a new title for your event");
  const calendarApi = selected.view.calendar;
  calendarApi.unselect();

  if (title) {
    calendarApi.addEvent({
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
  }
};

const handleEventClick = (selected) => {
  const { event } = selected;
  if (
    window.confirm(`Are you sure you want to delete the event '${event.title}'`)
  ) {
    event.remove();
  }
};

const defaultEvents = [
  //   {
  //     id: "12315",
  //     title: "All-day event",
  //     date: "2023-07-10",
  //   },
  //   {
  //     id: "23456",
  //     title: "Timed event",
  //     date: "2023-07-26",
  //   },
];

const getInitialEventsFromLocalStorage = () => {
  try {
    const items = JSON.parse(localStorage.getItem("currentEvents"));
    return items || defaultEvents;
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    return defaultEvents;
  }
};

export { handleDateClick, handleEventClick, getInitialEventsFromLocalStorage };
