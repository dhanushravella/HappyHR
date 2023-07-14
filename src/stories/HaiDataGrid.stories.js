import { HaiDataGrid } from '../components/HaiDataGrid';
var columns = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
  {
    title: 'Birth City',
    field: 'birthCity',
    lookup: { 1: 'Linz', 2: 'Vöcklabruck', 3: 'Salzburg' },
  },
];

var rows = [
  { id: '1', name: 'Max', surname: 'Mustermann', birthYear: 1987, birthCity: 'Linz' },
  { id: '2', name: 'Cindy', surname: 'Musterfrau', birthYear: 1995, birthCity: 'Salzburg' },
];
export default {
  title: 'HaiDataGrid',
  component: HaiDataGrid,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: {
      control: {
        type: 'text',
      },
    },
    rowSpacingType: {
      control: 'radio',
      options: ['border', 'margin'],
    },
  },
  density: {
    control: 'radio',
    options: ['standard', 'comfortable', 'standard'],
  },
};

export const Border = {
  args: {
    ariaLabel: 'text',
    autoHeight: false,
    autoPageSize: false,
    checkboxSelection: false,
    loading: false,
    rowSpacingType: 'border',
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    density: 'standard',
  },
};
export const Margin = {
  args: {
    ariaLabel: 'text',
    autoHeight: false,
    autoPageSize: false,
    checkboxSelection: false,
    loading: false,
    rowSpacingType: 'margin',
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    density: 'standard',
  },
};
export const Standard = {
  args: {
    ariaLabel: 'text',
    autoHeight: false,
    autoPageSize: false,
    checkboxSelection: false,
    loading: false,
    rowSpacingType: 'margin',
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    density: 'standard',
  },
};
export const Compact = {
  args: {
    ariaLabel: 'text',
    autoHeight: false,
    autoPageSize: false,
    checkboxSelection: false,
    loading: false,
    rowSpacingType: 'margin',
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    density: 'compact',
  },
};
export const Comfortable = {
  args: {
    columns: columns,
    rows: rows,
    ariaLabel: 'text',
    autoHeight: false,
    autoPageSize: false,
    checkboxSelection: false,
    loading: false,
    rowSpacingType: 'margin',
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    density: 'comfortable',
  },
};
