import { FaFileAlt, FaStore } from 'react-icons/fa'
import { FaPeopleGroup } from "react-icons/fa6";
import Logo from '../../assets/logo/icon-web.png';

const SidebarComponent = () => {
  return (
    <div className="w-64 bg-gray-900 fixed h-full">
      <div className='my-2 mb-4'>
        <h1 className="text-2xl text-white-500 font-bold ml-4">Admin Dasboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white-500 font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer'>
          <a href="" className='px-3'>
            <FaPeopleGroup className='inline-block w-6 h-6 mr-6 -mt-2'></FaPeopleGroup>
            QL. Tài Khoản
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer'>
          <a href="" className='px-3'>
            <FaStore className='inline-block w-6 h-6 mr-6 -mt-2'></FaStore>
            QL. Cửa Hàng
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer'>
          <a href="" className='px-3'>
            <FaFileAlt className='inline-block w-6 h-6 mr-6 -mt-2'></FaFileAlt>
            QL. Báo Cáo
          </a>
        </li>
      </ul>
      <div className='mt-80'>
        <hr />
        <div className='flex flex-col items-center text-center'>
          <img src={Logo} alt="Logo" className="w-72 h-72 sm:w-32 sm:h-32" />
          <h3 className='text-2xl sm:text-4xl font-bold mt-4 text-orange-600'>QuickServe</h3>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent 
