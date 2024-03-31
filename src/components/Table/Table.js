import * as React from "react";

// mui components
import { DataGrid } from "@mui/x-data-grid";
import theme from "../../utils/muiTheme";
import { ThemeProvider } from "@emotion/react";

// styles
import "../../styles/components/table.css";

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

export default function DataTable({data}) {

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });

  function handleRowAmountChange() {
    const inputValue = Number(document.querySelector("#row-amount").value);
    console.log(inputValue);
    
    if (inputValue >= 5 && inputValue <= 100) {
      setPaginationModel((prev) => ({
        ...prev,
        pageSize: inputValue,
      }));
    } else if(inputValue > 100){
      setPaginationModel((prev) => ({
        ...prev,
        pageSize: 100,
      }))
    } else{
      setPaginationModel((prev) => ({
        ...prev,
        pageSize: 5,
      }))
    } 
  }

  const rows = data.map((item, i) => ({ ...item, id: i }));

  return (
    <ThemeProvider theme={theme}>
      <div className="table__row-settings">
        <button className="custom-button" onClick={handleRowAmountChange}>
          Set Number of Rows
        </button>
        <input id="row-amount" type="number" placeholder="5" min="5" max="100" />
      </div>

      <div className="table__grid-wrapper">
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
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 30, 50, 100]}
          // checkboxSelection
        />
      </div>
    </ThemeProvider>
  );
}
