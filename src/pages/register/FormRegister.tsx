const FormRegister = () => {
    return (
        <div className='mt-12'>
            <form method='POST' autoComplete='off'>
                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="yourname" className='text-base font-semibold'>Họ Và Tên nhân viên: </label>
                        <input type="text" name="yourname" placeholder="Nhập Tên Của Nhân Viên...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="address" className='text-base font-semibold'>Địa chỉ nhân viên: </label>
                        <input type="text" name="address" placeholder="Nhập địa chỉ nhân viên...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="username" className='text-base font-semibold'>Tên đăng nhập: </label>
                        <input type="text" name="username" placeholder="Tên đăng nhập...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="role" className='text-base font-semibold'>Chức vụ nhân viên: </label>
                        <select className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full'>
                            <option value="0">- - Chọn - -</option>
                            <option value="2">QL. Cửa hàng</option>
                            <option value="3">Brand</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="email" className='text-base font-semibold'>Email: </label>
                        <input type="email" name="email" placeholder="Nhập Email Của Nhân Viên...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="phone" className='text-base font-semibold'>Số điện thoại: </label>
                        <input type="tel" name="phone" placeholder="Nhập Số Điện Thoại Của Nhân Viên...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="password" className='text-base font-semibold'>Mật khẩu: </label>
                        <input type="password" name="password" placeholder="Nhập mật khẩu...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="confirmPassword" className='text-base font-semibold'>Xác nhận mật khẩu: </label>
                        <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-2/4 ml-auto mr-20'>
                        <button type='submit' className='p-3 bg-green-600 text-white rounded-md shadow-sm hover:bg-orange-500 mr-4'>Đăng ký</button>
                        <button type='submit' className='p-3 bg-blue-600 text-white rounded-md shadow-sm hover:bg-orange-500 mr-4'>Cập Nhập</button>
                        <button type='submit' className='p-3 bg-red-500 text-white rounded-md shadow-sm hover:bg-orange-500'>Khoá người dùng</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormRegister
