import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const LoginForm = () => {
    return (
        <div className='flex flex-col items-center mt-10 gap-8 px-4 sm:px-0'>
            {/* header title form  */}
            <div className='flex flex-col items-center text-center'>
                <img src={Logo} alt="Logo" className="w-40 h-20 sm:w-64 sm:h-64" />
                <h3 className='text-2xl sm:text-4xl font-bold mt-4'>Login</h3>
            </div>
            <form autoComplete="off" className='w-full sm:w-80'>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='text-base font-semibold'>Tên đăng nhập: </label>
                    <input type="text" id="username" name="username" placeholder="Nhập username...."
                        className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="password" className='text-base font-semibold'>Mật khẩu: </label>
                    <input type="password" id="password" name="password" placeholder="Nhập mật khẩu...."
                        className='mt-2 border-2 border-orange-400 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                </div>
                <div className='flex flex-col sm:flex-row items-center mt-4 w-full sm:w-80 gap-12'>
                    <Link to={'/admin-account'}>
                        <button
                            type="submit"
                            className='bg-orange-500 p-3 rounded-xl text-black font-bold hover:bg-orange-600 cursor-pointer w-full sm:w-48'>
                            Đăng nhập
                        </button>
                    </Link>
                    <Link to="#" className='text-red-600 underline font-normal text-base mt-2 sm:mt-0 w-full sm:w-44'>Quên mật khẩu?</Link>
                </div>
            </form>
            <div className='w-full sm:w-80 mt-8'>
                <h6 className='text-sm italic font-bold'>Đây là hệ thống quản lý của dịch vụ QuickServe</h6>
                <h6 className='text-sm italic font-light'>Copyright by QuickServe</h6>
            </div>
        </div>
    )
}

export default LoginForm