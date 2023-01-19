import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  FilteringState,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SortingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import candidateJson from "../ResourceDashboard/Candidate.json";

export default () => {
  const [columns] = useState([
    { name: "role", title: "Role" },
    { name: "skillSet", title: "Skill Set" },
    { name: "experience", title: "Experience" },
    { name: "location", title: "Location" },
    { name: "interviewStatus", title: "Interview Status" },
    { name: "status", title: "Status" },
    { name: "clientInterview", title: "Client Interview" },
    { name: "comment", title: "Comment" },
    { name: "practiceHeadName", title: "Practice Head Name" },
  ]);

  const [rows] = useState(candidateJson);
  const [sorting, setSorting] = useState([
    { columnName: "role", direction: "asc" },
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  // const [pageSizes] = useState([5, 10, 15]);

  console.log(candidateJson, "candidateJson");

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <FilteringState defaultFilters={[]} />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <SortingState sorting={sorting} onSortingChange={setSorting} />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow showSortingControls />
        <TableFilterRow />
        <PagingPanel />
      </Grid>
    </Paper>
  );
};
