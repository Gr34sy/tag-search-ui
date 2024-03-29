import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import theme from "../utils/muiTheme";
import { ThemeProvider } from "@emotion/react";
import { urlBase, urlTags } from "../utils/apiVariables";
import data from "../utils/tags.json";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Tag Name",
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "count",
    headerName: "Pole Count",
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "has_synonyms",
    headerName: "Has Synonyms",
    type: "boolean",
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "is_required",
    headerName: "Required",
    type: "boolean",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "is_moderator_only",
    headerName: "Moderator Only",
    type: "boolean",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
];

const rows = data.items.map((item, index) => ({
  id: index,
  ...item,
}));

export default function DataTable() {
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    // fetch(urlBase + urlTags)
    // .then((res) => res.json())
    // .then((data) => {
    //   setTableData(data);
    //   console.log(data);
    // })
    // .catch(e => {
    //   console.error(e.message);
    // });

    console.log(data.items);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 480, width: "100%" }}>
        <DataGrid
          sx={{
            ".MuiDataGrid-columnHeader": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },

            "&.MuiDataGrid-root": {
              backgroundColor: "#fff",
            },

            ".MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.primary.main,
              color: "#fff !important",
              borderRadius: "2px",
            },
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 30]}
          // checkboxSelection
        />
      </div>
    </ThemeProvider>
  );
}
