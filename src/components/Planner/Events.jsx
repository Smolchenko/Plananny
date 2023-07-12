import { formatDate } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Events = ({ currentEvents }) => {
  const theme = useTheme();

  return (
    <Grid xs={12} md={4} pt={0} sx={{ maxHeight: "73vh", overflowY: "scroll" }}>
      <Box
        p="15px"
        borderRadius="4px"
        sx={{ backdropFilter: `${theme.palette.background.eventList}` }}
      >
        <Typography variant="h3">Scheduled Events</Typography>
        <List
          sx={{
            maxHeight: "20vh",
            "@media (min-width: 960px)": {
              maxHeight: "100%",
            },
          }}
        >
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                margin: "10px 0",
                borderRadius: "5px",
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.background.event,
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography
                    sx={{
                      color: theme.palette.secondary.dateHighlight,
                    }}
                  >
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default Events;
