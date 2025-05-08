import guidingStar from "../../public/images/guiding-start.png";

const SkillsPage = ({ skills }) => {
  return (
    <div className="p-12 text-gray-800">
      <h2 className="text-2xl font-semibold mb-6">Your Guiding Stars</h2>

      {/* <div className="flex justify-center gap-4 flex-wrap mb-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-300 text-black px-4 py-2 rounded-full shadow text-sm font-medium"
          >
            {skill}
          </div>
        ))}
      </div> */}

      <div className="flex justify-center mt-16">
        <img
          src={guidingStar}
          alt="Guiding Star"
          className="max-w-full h-auto md:w-[100%]"
        />
      </div>
    </div>
  );
};

export default SkillsPage;
