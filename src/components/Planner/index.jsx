import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Header from "../Header";
import Events from "./Events";
import Calendar from "./Calendar";
import {
  handleDateClick,
  handleEventClick,
  getInitialEventsFromLocalStorage,
} from "../../utils/eventHandlingUtils";

const Planner = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [initialEvents, setInitialEvents] = useState(() =>
    getInitialEventsFromLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("currentEvents", JSON.stringify(currentEvents));
  }, [currentEvents]);

  return (
    <Box m="20px auto" sx={{ maxWidth: "1000px" }}>
      <Header />
      <Grid container spacing={2}>
        <Events currentEvents={currentEvents} />
        <Calendar
          handleDateClick={handleDateClick}
          handleEventClick={handleEventClick}
          setCurrentEvents={setCurrentEvents}
          initialEvents={initialEvents}
        />
      </Grid>
    </Box>
  );
};

export default Planner;
