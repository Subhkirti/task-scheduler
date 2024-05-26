import React from "react";
import { Box, Typography } from "@mui/material";

function UpcomingTasks({ upcomingTasks, markDone, deleteTask }) {
  return (
    <React.Fragment>
      <Typography variant="h2">Upcoming Tasks</Typography>
      <Box className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th className="action-head">Actions</th>
            </tr>
          </thead>
          <tbody>
            {upcomingTasks.map((t) => (
              <tr key={t.id}>
                <td className="text-overflow">{t.task}</td>
                <td>{t.priority}</td>
                <td>{t.deadline}</td>
                <td className="actions">
                  {!t.done && (
                    <button
                      className="mark-done"
                      onClick={() => markDone(t.id)}
                    >
                      Mark Done
                    </button>
                  )}
                  {!t.done && (
                    <button className="delete" onClick={() => deleteTask(t.id)}>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {upcomingTasks && !upcomingTasks?.length > 0 && (
          <Typography className="not-found">No tasks found...</Typography>
        )}
      </Box>
    </React.Fragment>
  );
}

export default UpcomingTasks;
