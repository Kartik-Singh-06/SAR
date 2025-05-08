const SummaryPage = ({ summary }) => {
  return (
    <div className="p-12 ">
      <h2 className="text-4xl font-semibold mb-4">WHAT’S NEXT?</h2>
      <p className="mb-8 max-w-3xl mx-auto">{summary}</p>
      <footer className="mt-10 text-xl font-bold text-black">
        Connect with us: prdrobotechsolutions@gmail.com <br /> <br/>
        Call us at: <br /> +91 8130527788 <br /> <br /><br />
        Visit out website at: <br />
        Website: www.prdrobotechsolutions.com <br />
        Follow us: instagram.com/prd <br /> linkedin.com/prd <br /> facebook.com/prd
      </footer>
    </div>
  );
};

export default SummaryPage;