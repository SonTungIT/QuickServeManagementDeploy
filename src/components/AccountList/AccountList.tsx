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
import { useAppDispatch, useAppSelector } from '../../services/store/store';
import { useEffect } from 'react';
import { getAllUser } from '../../services/features/userSlice';
import { IUserInfo } from '../../models/UserInfor';

const columns: MRT_ColumnDef<IUserInfo>[] = [
    {
        accessorKey: 'id',
        header: 'User ID',
    },
    {
        accessorKey: 'userName',
        header: 'Tên Đăng nhập',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'roles',
        header: 'Chức danh',
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Số điện thoại',
    },
    {
        accessorKey: 'name',
        header: 'Tên',
    },
    {
        accessorKey: 'address',
        header: 'Địa chỉ',
    },
    {
        accessorKey: 'avatar',
        header: 'Ảnh đại diện',
    },
    {
        accessorKey: 'created',
        header: 'Ngày tạo',
        Cell: ({ cell }) => cell.row.original.created instanceof Date ? cell.row.original.created.toLocaleDateString() : cell.row.original.created,
    },
];

const AccountList = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    const table = useMaterialReactTable({
        columns,
        data: users || [],
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

