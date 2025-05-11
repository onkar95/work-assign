import { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";


export const TabsList = () => {
  const { selectedUser, selectedTab, setSelectedTab, setSelectedWidgets } = useContext(UserContext);
  console.log("selectedUser", selectedUser)
  const tabs = selectedUser?.dynamicTabs ? Object.entries(selectedUser?.dynamicTabs) : selectedUser?.tabs
  const widgets = selectedUser?.dynamicTabs ? Object.values(selectedUser?.dynamicTabs) : []


  const handelTabChange = (tab) => {
    console.log("tab", tab)
    setSelectedTab(tab[0])
    setSelectedWidgets(tab[1])
    window.scroll(0, 100)
  }
  
  useEffect(() => {
    let t=tabs[0]
    if(tabs[0]){
      setSelectedTab(t[0])
      setSelectedWidgets(t[1])
    }
    // window.scroll(0, document.body.scrollHeight)
  }, [selectedUser])

  if (!selectedUser) return null;

  return (
    <div className="flex space-x-4 my-4">
      {tabs && tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-2 py-0 rounded-xs 
          ${selectedTab == tab[0] ? 'bg-[#cc8b00] text-white' : 'bg-gray-100'}`}
          onClick={() => handelTabChange(tab)}
        >
          {tab[0]}
        </button>
      ))}
    </div>
  );
};