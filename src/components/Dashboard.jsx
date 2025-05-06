import { useContext } from "react";
import UserContext from "../context/userContext";
import { TabsList } from "./ui/TabsList";
import Tab1 from "./tabs/tab_1";

export const Dashboard = () => {
  const { selectedUser, selectedTab } = useContext(UserContext);

  console.log("object",selectedUser)
  console.log("selectedTab",selectedTab)

  if (!selectedUser?.user) return <div className="p-4">Please select a user to view dashboard</div>;

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <Tab1/>;
      case 1:
        return <div>Settings Content for {selectedUser?.user}</div>;
      case 2:
        return <div>Profile Content for {selectedUser?.user}</div>;
      case 3:
        return <div>Analytics Content for {selectedUser?.user}</div>;
      default:
        return <div>Unknown tab</div>;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Dashboard for {selectedUser?.user}</h2>
      <TabsList />
      {renderTabContent()}
    </div>
  );
};