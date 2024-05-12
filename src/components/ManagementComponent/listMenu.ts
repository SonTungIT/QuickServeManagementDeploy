import adminIcon from '../../assets/icon/account-management.png';
import storeManagementIcon from '../../assets/icon/store-management.png';
import chartRevenueIcon from '../../assets/icon/chart-revenue.png';
import feedbackIcon from '../../assets/icon/feedback.png';
import adminReportIcon from '../../assets/icon/admin-report.png';

const listMenu = {
    adminMenu: [
        {
            title: 'QL. Tài Khoản',
            url: '/admin-account',
            icon: adminIcon,
        },
        {
            title: 'QL. Cửa Hàng',
            url: '/admin-store',
            icon: storeManagementIcon,
        },
        {
            title: 'QL. Báo Cáo',
            url: '/admin-revenue-report',
            icon: adminReportIcon,
            subAdminMenu: [
                {
                    title: 'Doanh thu',
                    url: '/admin-revenue-report',
                    icon: chartRevenueIcon,
                },
                {
                    title: 'Phản hồi',
                    url: '/admin-feedback',
                    icon: feedbackIcon,
                },
            ],
        },
    ],
    storeManagementMenu: [
        {
            title: 'Store Management',
            url: '/store-management',
            icon: 'fa fa-store',
        },
    ],
    brandManagementMenu: [
        {
            title: 'Brand Management',
            url: '/brand-management',
            icon: 'fa fa-building',
        },
    ],
};
export default listMenu;