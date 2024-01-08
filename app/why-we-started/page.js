import DoctorExperienceSurvey from "@/components/WhyWeStarted/DoctorExperienceSurvey";
import ResearchPage from "@/components/WhyWeStarted/ResearchDevelopment";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <DoctorExperienceSurvey />
      <ResearchPage />
      {/* Add more components as needed */}
    </div>
  );
};

export default page;
