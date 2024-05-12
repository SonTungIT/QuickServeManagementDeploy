import Logo from '../../assets/logo/icon-web.png';
import menu from './listMenu.ts';
import NavbarComponent from './NavbarComponent.tsx';

const SidebarComponent = () => {
  return (
    <div className='flex'>
      <div className="w-56 bg-gray-800 fixed h-full">
        <div className='my-2 mb-4'>
          <h1 className="text-2xl text-white-500 font-bold ml-4">Admin Dashboard</h1>
        </div>
        <hr />
        {menu.adminMenu.map((item, index) => (
          <ul className='mt-3 text-white-500 font-bold' key={index}>
            <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer flex'>
              <img src={item.icon} className='w-6 h-6 inline-block ml-2 text-white-500' />
              <a href="" className='px-3'>
                {item.title}
              </a>
            </li>
          </ul>
        ))}
        <div className='mt-64'>
          <hr />
          <div className='flex flex-col items-center text-center'>
            <img src={Logo} alt="Logo" className="w-48 h-48 sm:w-32 sm:h-32" />
            <h3 className='text-2xl sm:text-4xl font-bold mt-4 text-orange-600'>QuickServe</h3>
          </div>
        </div>
      </div>
      <NavbarComponent /></div>

  )
}

export default SidebarComponent;
