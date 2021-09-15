import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams} from "@material-ui/data-grid"

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {
        field: 'make',
        headerName: 'Make',
        width: 150,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 150,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 110,
        editable: true,
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 150,
        editable: true,
    }
];

const rows = [
    { id: 2, make: 'Volkswagen', model: 'Bus', year: 1966, color: "Tye Dye" },
    { id: 1, make: 'Honda', model: 'Civic', year: 2002, color: "Silver" },
    { id: 3, make: 'Toyota', model: 'Corolla', year: 2015, color: "Black" },
    { id: 4, make: 'Chevy', model: 'Impala', year: 1986, color: "Red" },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2010, color: "Grey" },
    { id: 6, make: 'Honda', model: "Accord", year: 2020, color: "Tan" },
    { id: 7, make: 'Chevy', model: 'Malibu', year: 2000, color: "White" },
    { id: 8, make: 'Subaru', model: 'Outback', year: 2022, color: "Blue" },
    { id: 9, make: 'Jeep', model: 'Wrangler', year: 2015, color: "Yellow" },
  ];

  export const DataTable = () => {
      return(
          <div style= {{ height: 400, width: '100% '}}>
            <h2>Car's In Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
      )
  }