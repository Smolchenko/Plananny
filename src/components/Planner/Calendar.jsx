import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { tokens } from "../../theme";

const Calendar = ({
  handleDateClick,
  handleEventClick,
  setCurrentEvents,
  initialEvents,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid
      xs={12}
      md={8}
      sx={{
        background: `${theme.palette.background.calendar}`,
        border: `2px solid ${
          theme.palette.mode === "dark"
            ? colors.primary[400]
            : colors.primary[600]
        }`,
        borderRadius: "3px",
      }}
    >
      <Box ml="15px">
        <FullCalendar
          height="70vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={initialEvents}
          eventColor={
            theme.palette.mode === "dark"
              ? colors.primary[300]
              : colors.primary[600]
          }
          eventTextColor={
            theme.palette.mode === "dark"
              ? colors.primary[100]
              : colors.neutral[100]
          }
        />
      </Box>
    </Grid>
  );
};

export default Calendar;
