import { useContext } from "react";
import UserContext from "../../context/userContext";


export const TabsList = () => {
  const { selectedUser, selectedTab, setSelectedTab } = useContext(UserContext);
  console.log("selectedUser", selectedUser)

  if (!selectedUser) return null;

  return (
    <div className="flex space-x-4 mb-4">
      {selectedUser.tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-2 ${selectedTab === index ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};