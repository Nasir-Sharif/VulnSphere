import Intro from "/src/components/Intro";
import InternshipSection from "../components/InternshipSection";
import TaskPortalSection from "../components/TaskPortalSection";
import InstructorSection from "../components/InstructorSection";
import CareerLaunchSection from "../components/CareerLaunchSection";
import AIMockInterview from "../components/AIMockInterview";
import InternshipProcess from "../components/InternshipProcess";
import AICareerJourney from "../components/AICareerJourney";
import ShareYourKnowledge from "../components/ShareYourKnowledge";
import JoinCommunity from "../components/JoinCommunity";
import UnlockNewOpportunities from "../components/UnlockNewOpportunities";

function Home() {

  return (
    <>
      <div className="dark:bg-blackColor dark:text-themeGray bg-whiteColor">
      
        <div className="container-sm ">
          <Intro />
        </div>
        <InternshipSection />
        <TaskPortalSection />
        <InstructorSection />
        <CareerLaunchSection />
        <AIMockInterview />
        <InternshipProcess />
        <AICareerJourney />
        <ShareYourKnowledge />
        <JoinCommunity />
        <UnlockNewOpportunities />

      </div>
    </>
  );
}

export default Home;
