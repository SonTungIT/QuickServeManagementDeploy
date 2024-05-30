import { IUser } from '../models/UserInfor';

const userData: IUser[] = [
    {
        id: 1,
        username: 'sontungit',
        email: 'sontungit@gmail.com',
        gender: 'Male',
        phone: '0987685674',
        role: 'Admin',
        avatar: '',
        birthday: new Date('2001-01-19'),
        address: '288/3 Man Thiện, Tăng Nhơn Phú A, Quận 9, TP.HCM',
        status: true,
    },
    {
        id: 2,
        username: 'sontungit1',
        email: 'sontungit1@gmail.com',
        gender: 'Female',
        phone: '0987685674',
        role: 'Store Manager',
        avatar: '',
        birthday: new Date('2001-05-19'),
        address: '212 Đường số 1, Phước Long B, Quận 9, TP.HCM',
        status: false,
    },
    {
        id: 3,
        username: 'phikhanhit',
        email: 'phikhanhit@gmail.com',
        gender: 'Male',
        phone: '0347678592',
        role: 'Brand Manager',
        avatar: '',
        birthday: new Date('2002-12-22'),
        address: '288/3 Man Thiện, Tăng Nhơn Phú A, Quận 9, TP.HCM',
        status: true,
    },
    {
        id: 4,
        username: 'nhutminhit',
        email: 'nhutminh.it19@gmail.com',
        gender: 'Male',
        phone: '0369269410',
        role: 'Store Manager',
        avatar: '',
        birthday: new Date('2000-12-22'),
        address: '288/3 Man Thiện, Tăng Nhơn Phú A, Quận 9, TP.HCM',
        status: true,
    },
];

export default userData;
