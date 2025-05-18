import React, { useContext } from 'react'
import UserContext from '../../context/userContext';

const UserCard = ({ user, data }) => {
    const { setSelectedUser, selectedUser } = useContext(UserContext);
    const handelUserSelect = () => {
        setSelectedUser(() => user);
        // setSelectedWidgets(()=>)
        }
    return (
        // #cc8b00
        <button onClick={() => setSelectedUser(data)}>
            <div
                className={`flex flex-col items-center text-neutral-900 bg-[#cac8c3] hover:scale-[103%] transition duration-300 ease-in-out p-0 my-1 hover:bg-[#cc8b00] hover:text-white`}
                style={selectedUser?.id === data?.id ? { backgroundColor: "#cc8b00",color:"white" } : {}}
            >
                {/* && selectedUser.adviser.name === user.name ? "border-2" : "" */}
                <img className='w-[100%] h-[150px] rounded-xs' src={user.profile} />
                <div className='py-3'>
                    <p>{user.name}</p>
                    <p>{user.meetingTime}</p>
                </div>
            </div>
        </button>
    )
}

export default UserCard