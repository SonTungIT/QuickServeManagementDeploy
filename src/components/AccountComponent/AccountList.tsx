import {
    MRT_GlobalFilterTextField,
    MRT_TableBodyCellValue,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    flexRender,
    type MRT_ColumnDef,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { IUser } from '../../models/User';
// import { type Person, data } from './makeData';
import data from '../../data/userData';

const columns: MRT_ColumnDef<IUser>[] = [
    {
        accessorKey: 'fullname',
        header: 'Họ và Tên',
    },
    {
        accessorKey: 'gender',
        header: 'Giới tính',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'phone',
        header: 'Số điện thoại',
    },
    {
        accessorKey: 'role',
        header: 'Chức danh',
    },
    {
        accessorKey: 'birthday',
        header: 'Sinh nhật',
        Cell: ({ cell }) => cell.row.original.birthday instanceof Date ? cell.row.original.birthday.toLocaleDateString() : cell.row.original.birthday,
    },
    {
        accessorKey: 'address',
        header: 'Địa chỉ',
    },
    {
        accessorKey: 'status',
        header: 'Trạng thái',
        Cell: ({ cell }) => (
            <span style={{
                color: cell.row.original.status ? 'green' : 'red',
                fontWeight: 'bold',
                borderRadius: '10px',
                border: cell.row.original.status ? '1px solid #b7f5a4' : '1px solid #ed9a82',
                padding: '4px',
                backgroundColor: cell.row.original.status ? '#b7f5a4' : '#ed9a82',
            }}>
                {cell.row.original.status ? 'Active' : 'Inactive'}
            </span>
        ),
    },

];

const AccountList = () => {
    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 5, pageIndex: 0 },
            showGlobalFilter: true,
        },
        muiPaginationProps: {
            rowsPerPageOptions: [5, 10, 15],
            variant: 'outlined',
        },
        paginationDisplayMode: 'pages',
    });

    return (
        <Stack sx={{ m: '2rem 0' }}>
            <Typography variant="h4">Danh sách nhân viên</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >

                <MRT_GlobalFilterTextField table={table} />
                <MRT_TablePagination table={table} />
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableCell align="left" variant="head" key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.Header ??
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row, rowIndex) => (
                            <TableRow
                                key={row.id}
                                selected={row.getIsSelected()}
                                style={{ backgroundColor: rowIndex % 2 === 0 ? 'white' : '#d9d9d9' }}
                            >
                                {row.getVisibleCells().map((cell, _columnIndex) => (
                                    <TableCell align="left" variant="body" key={cell.id}>
                                        <MRT_TableBodyCellValue
                                            cell={cell}
                                            table={table}
                                            staticRowIndex={rowIndex}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Stack>
    );
};

export default AccountList;