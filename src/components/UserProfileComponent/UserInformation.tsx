import userProfile from '../../data/userProfile';

const UserInformation = () => {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${userProfile.avatar})` }}>
                <div className="flex justify-center">
                    <img className="h-24 w-24 rounded-full border-4 border-white mt-24" src={userProfile.avatar} alt="Profile" />
                </div>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">{userProfile.fullname}</h2>
                <div className="flex flex-col">
                    <label className="font-medium">Chức danh:</label>
                    <span className="mb-2">{userProfile.role}</span>
                </div>
                <div className="flex justify-between text-left">
                    <div className='flex flex-row  justify-between w-full'>
                        <div className="flex flex-col">
                            <label className="font-medium">Email:</label>
                            <span className="mb-2">{userProfile.email}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Số điện thoại:</label>
                            <span className="mb-2">{userProfile.phone}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <label className="font-medium">Địa chỉ liên hệ:</label>
                    <span className="mb-2">{userProfile.address}</span>
                </div>
            </div>
        </div>
    );
}

export default UserInformation;
