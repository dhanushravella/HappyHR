import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material';
import PropTypes, { number } from 'prop-types';
import { Col, Row } from 'antd';


export const defaultMaterialTheme = createTheme();
export const HaiDataGrid = ({
  columns,
  rows,
  ariaLabel,
  autoHeight,
  autoPageSize,
  checkboxSelection,
  loading,
  rowSpacingType,
  showCellVerticalBorder,
  showColumnVerticalBorder,
  density,
  ...props
}) => {
//   columns = [
//     { title: 'Name', field: 'name' },
//     { title: 'Surname', field: 'surname' },
//     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//     {
//       title: 'Birth City',
//       field: 'birthCity',
//       lookup: { 1: 'Linz', 2: 'Vöcklabruck', 3: 'Salzburg' },
//     },
//   ];

//   rows = [
//     { id: '1', name: 'Max', surname: 'Mustermann', birthYear: 1987, birthCity: 'Linz' },
//     { id: '2', name: 'Cindy', surname: 'Musterfrau', birthYear: 1995, birthCity: 'Salzburg' },
//   ];
  // showColumnVerticalBorder = 'true'
  // paginationModel= {page: 1, pageNumber: 1}
  return (
    <div>
      <Row>
        <Col span={24}>
          <ThemeProvider theme={defaultMaterialTheme}>
            <DataGrid
              columns={columns ? columns: [] }
              rows={rows ? rows:[]}
              aria-label={ariaLabel}
              autoHeight={autoHeight}
              autoPageSize={autoPageSize}
              checkboxSelection={checkboxSelection}
              loading={loading}
              rowSpacingType={rowSpacingType}
              showCellVerticalBorder={showCellVerticalBorder}
              showColumnVerticalBorder={showColumnVerticalBorder}
              // paginationModel={paginationModel}
              // rowBuffer={rowBuffer}
              density={density}
            ></DataGrid>
          </ThemeProvider>
        </Col>
      </Row>
    </div>
  );
};
HaiDataGrid.propTypes = {
    // aria Label over our Data Grid
  ariaLabel: PropTypes.string,
  // Will rows adjust according to Grid Size
  autoHeight: PropTypes.bool,
  // Will page adjust according to Grid Size
  autoPageSize: PropTypes.bool,
  // Can select rows of Grid individually
  checkboxSelection: PropTypes.bool,
  // loading icon till our table is searching or loading
  loading: PropTypes.bool,
  // rows are spaced according to border or margin
  rowSpacingType: PropTypes.oneOf(['border', 'margin']),
  // Shows vertical border around cells
  showCellVerticalBorder: PropTypes.bool,
  // Shows vertical borders around columns
  showColumnVerticalBorder: PropTypes.bool,
  // How our data Grid is packed
  density: PropTypes.oneOf(['standard','comfortable','compact'])
  // paginationModel: PropTypes.arrayOf([number])
};
HaiDataGrid.defaultProps = {
  loading: false,
  ariaLabel: '',
  autoHeight: false,
  autoPageSize: false,
  checkboxSelection: false,
  rowSpacingType: 'border',
  showCellVerticalBorder: false,
  showColumnVerticalBorder: false,
  density: 'standard',
};
