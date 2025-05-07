import { useContext } from "react";
import UserContext from "../context/userContext";
import { TabsList } from "./ui/TabsList";
import Tab1 from "./tabs/tab_1";

export const Dashboard = () => {
  const { selectedUser, selectedTab } = useContext(UserContext);

  console.log("object", selectedUser)
  console.log("selectedTab", selectedTab)

  if (!selectedUser?.user) return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center">
      <h2 className="text-2xl font-semibold mb-2">Welcome to UserDash</h2>
      <p className="text-muted-foreground">
        Please select a user from the dropdown to view their dashboard
      </p>
    </div>
  )

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <Tab1 adviser={selectedUser.adviser}/>;
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
    <div className="container mx-auto px-4 py-6 flex  flex-col items-center justify-center">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-shrink-0">
          <img
            src={''}
            alt={selectedUser.name}
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div >
          <h1 className="text-2xl font-bold">{selectedUser.user}'s Dashboard</h1>
          <p className="text-muted-foreground">{selectedUser.role}</p>
        </div>
      </div>
      <TabsList />
      <div>

        {renderTabContent()}
      </div>
    </div>
  );
};