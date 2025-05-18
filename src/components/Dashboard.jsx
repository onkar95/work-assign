import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import { TabsList } from "./customUI/TabsList";
import Overview from "./tabs/Overview";
import Insights from "./tabs/Insights";
import RiskAnalysis from "./tabs/RiskAnalysis";
import MeetingAgenda from "./tabs/MeetingAgenda";
import ClientCommunication from "./tabs/ClientCommunication";
import { UserData } from "../db";
import UserCard from "./widgets/UserCard";
import { CarouselSize } from "./customUI/Carousel";
import MyCarousel from "./ui/MyCarousel";

export const Dashboard = () => {
  const { selectedUser, selectedTab, selectedWidgets } = useContext(UserContext);



  console.log("object", selectedUser?.dynamicTabs)
  console.log("selectedTab", selectedTab)
  console.log("selectedWidgets", selectedWidgets)

  if (!selectedUser) return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center">
      <h2 className="text-2xl font-semibold mb-2">Welcome to UserDash</h2>
      <p className="text-muted-foreground">
        Please select a user from the dropdown to view their dashboard
      </p>
    </div>
  )


  const renderTabContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview selectedWidgets={selectedWidgets} />;
      case "Insights":
        return <Insights selectedWidgets={selectedWidgets} />;
      case "risk Analysis":
        return <RiskAnalysis selectedWidgets={selectedWidgets} />;
      case "Meeting Agenda":
        return <MeetingAgenda selectedWidgets={selectedWidgets} />;
      case "Client Communication":
        return <ClientCommunication selectedWidgets={selectedWidgets} />;
      default:
        return <div>Unknown tab</div>;
    }
  };


  return (
    <div className=" px-4 flex flex-col justify-center  ">

      <div
        className="self-center flex flex-col justify-center  bg-primary-4 text-secondary-3  w-[100%] my-2 rounded-b-xl "
      >
        {/* <CarouselSize /> */}
        <MyCarousel itemWidth="" scrollAmount={300} className="px-14">
          {
            UserData?.map((val, index) => (
              <UserCard user={val.adviser} data={val} />
            ))
          }
        </MyCarousel>
        <div className=" ">

          <h1 className="text-2xl font-bold bg-[#cc8b00] text-center py-1.5 rounded-b-xl text-white">{selectedUser?.adviser?.name}'s Dashboard</h1>
        </div>
      </div>
      <TabsList />
      <div>

        {renderTabContent()}
      </div>
    </div>
  );
};