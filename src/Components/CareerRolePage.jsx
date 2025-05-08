const CareerRolePage = ({ role,name }) => {
  console.log(role)
  return (
    <div className="p-12 text-gray-800">
      <h2 className="text-xl font-bold  mb-4">Top Career Pathways for {name}</h2>
      <h2 className="text-xl font-bold  mb-4">{role.role}</h2>
      <div className="mb-4">
        <strong>Why It Matches Your Profile:</strong>
        <p>{role.why_it_matches_profile}</p>
      </div>
      <div className="mb-4">
        <strong>Potential Job Roles and Growth Opportunities:</strong>
        <ul className="list-disc pl-6">
          {role.potential_job_roles_and_growth_opportunities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Educational Pathways and Skill Development:</strong>
        <p>{role.educational_pathways_and_skill_development}</p>
      </div>
      <div className="mb-4">
        <strong>Mindset and Attitude Development:</strong>
        <p>{role.mindset_and_attitude_development}</p>
      </div>
      <div>
        <strong>Career Trends and Future Outlook:</strong>
        <p>{role.career_trends_and_future_outlook}</p>
      </div>
    </div>
  );
};

export default CareerRolePage;
