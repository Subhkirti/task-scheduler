import React from "react";
import { Box, Typography } from "@mui/material";

function CompletedTasks({ completedTasks }) {
  return (
    <div className="completed-task-list">
      <Typography variant="h2">Completed Tasks</Typography>
      <Box className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Deadline</th>
            </tr>
          </thead>

          <tbody>
            {completedTasks.map((ct) => (
              <tr key={ct.id}>
                <td className="text-overflow">{ct.task}</td>
                <td>{ct.priority}</td>
                <td>{ct.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {completedTasks && !completedTasks?.length > 0 && (
          <Typography className="not-found">No tasks found...</Typography>
        )}
      </Box>
    </div>
  );
}

export default CompletedTasks;
