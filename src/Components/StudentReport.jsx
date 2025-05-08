import React from "react";
import CoverPage from "./CoverPage";
import CareerRolePage from "./CareerRolePage";
import WelcomePage from "./WelcomePage";
import SkillsPage from "./SkillPage";
import SummaryPage from "./SummaryPage";
import Page from "./Page";
import MotivationPage from "./MotivationPage";
import EndingPage from "./EndingPage";

const StudentReport = ({ student }) => {
  console.log(student);

  return (
    <>
      <div className="overflow-x-hidden">
        <Page hideLogo={true}>
          <CoverPage name={student.name} />
        </Page>

        <Page>
          <MotivationPage />
        </Page>

        <Page>
          <WelcomePage name={student.name} />
          <SkillsPage skills={student.skills} />
        </Page>

        {student.top_career_roles.map((role, idx) => (
          <Page key={idx}>
            <CareerRolePage role={role} name={student.name} />
          </Page>
        ))}

        <Page>
          <SummaryPage summary={student.summary} />
        </Page>

        <Page hideLogo={true} hideFooter={true}>
          <EndingPage />
        </Page>
      </div>
    </>
  );
};

export default StudentReport;
