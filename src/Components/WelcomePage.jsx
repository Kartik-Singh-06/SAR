const WelcomePage = ({ name }) => {
  return (
    <div className="p-12 text-gray-800 leading-relaxed text-[1rem] md:text-[1.2rem]">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to your personalized career profile, {name}!
      </h2>
      <p className="mb-4">
        At PRD Robotech, we believe that understanding your unique values, interests, and personality traits is the key to navigating your career journey successfully. This report is designed to provide you with insights into your core strengths and guide you toward fulfilling career opportunities. Let's embark on this colorful journey together — with PRD Robotech as your guide.
      </p>
    </div>
  );
};

export default WelcomePage;
