const studentDataList = [
    {
      id: 1,
      name: "Prashant Sharma",
      age: 17,
      grade: "12th",
      skills: [
        "Critical Thinking",
        "Problem Solving",
        "Leadership",
        "Technical Aptitude",
        "Collaboration",
        "Adaptability",
      ],
      top_career_roles: [
        {
          role: "Software Engineer",
          why_it_matches_profile:
            "Prashant demonstrates exceptional logical reasoning and problem-solving abilities, consistently excelling in mathematics and computer science. His patience in debugging complex problems and enthusiasm for technology makes him ideally suited for software development roles. He has already built several small applications demonstrating his coding proficiency.",
          potential_job_roles_and_growth_opportunities: [
            "Frontend Developer",
            "Backend Engineer",
            "Full Stack Developer",
            "DevOps Specialist",
            "Machine Learning Engineer",
            "Technical Architect",
          ],
          educational_pathways_and_skill_development:
            "Pursue a Bachelor's degree in Computer Science or related field. Focus on mastering programming languages like Python, Java, and JavaScript. Develop expertise in data structures, algorithms, and system design. Consider certifications in cloud computing platforms like AWS or Azure. Contribute to open-source projects to gain practical experience.",
          mindset_and_attitude_development:
            "Cultivate a growth mindset to continuously learn new technologies. Develop resilience to handle complex technical challenges. Practice agile methodologies and collaborative coding. Stay updated with industry trends through tech blogs and conferences. Build a professional network through tech meetups and hackathons.",
          career_trends_and_future_outlook:
            "The software engineering field in India is projected to grow by 22% by 2030, with particularly strong demand in AI, cybersecurity, and cloud computing. Remote work opportunities are expanding globally, with Indian developers increasingly working for international companies. The average starting salary for fresh graduates ranges from ₹6-12 LPA in top tech companies.",
        },
        {
          role: "Data Scientist",
          why_it_matches_profile:
            "Prashant's strong analytical skills and curiosity for deriving insights from data make him well-suited for data science. He has shown particular aptitude in statistics projects and enjoys working with large datasets to find patterns and solutions. His mathematics scores consistently rank in the top percentile of his class.",
          potential_job_roles_and_growth_opportunities: [
            "Data Analyst",
            "Machine Learning Engineer",
            "Business Intelligence Analyst",
            "Research Scientist",
            "Data Engineering Specialist",
            "AI Solutions Architect",
          ],
          educational_pathways_and_skill_development:
            "Complete a degree in Computer Science, Statistics, or Applied Mathematics. Master Python and R programming languages. Develop expertise in SQL, data visualization tools (Tableau, Power BI), and machine learning frameworks (TensorFlow, PyTorch). Pursue specialized certifications in data science from recognized platforms like Coursera or edX.",
          mindset_and_attitude_development:
            "Develop strong business acumen to translate data insights into actionable strategies. Cultivate patience for cleaning and preparing messy datasets. Stay curious about emerging data analysis techniques. Build storytelling skills to effectively communicate findings to non-technical stakeholders. Participate in Kaggle competitions to sharpen skills.",
          career_trends_and_future_outlook:
            "Data science roles are expected to grow by 30% in India over the next five years, with demand across industries like healthcare, finance, and e-commerce. Companies are increasingly valuing professionals who can bridge technical and business domains. Starting salaries range from ₹8-15 LPA in metro cities, with significant growth potential.",
        },
      ],
      summary:
        "Prashant is a highly capable student with outstanding technical and analytical abilities. His combination of strong mathematical foundations, programming skills, and problem-solving mindset positions him well for STEM careers. He thrives in challenging environments and demonstrates leadership in group projects. With his dedication to continuous learning and adaptability to new technologies, Prashant has the potential to excel in fast-evolving tech fields. His collaborative nature and communication skills further enhance his professional prospects in team-based technical roles.",
    },
    {
      id: 2,
      name: "Ananya Desai",
      age: 16,
      grade: "11th",
      skills: [
        "Creative Thinking",
        "Analytical Reasoning",
        "Time Management",
        "Statistical Aptitude",
        "Communication",
        "Self-motivation",
      ],
      top_career_roles: [
        {
          role: "Data Scientist",
          why_it_matches_profile:
            "Ananya has a strong grasp of mathematical concepts and a deep interest in uncovering insights from complex data. She frequently participates in data science bootcamps and school analytics clubs, where she excels in solving real-world data problems.",
          potential_job_roles_and_growth_opportunities: [
            "Data Analyst",
            "Data Scientist",
            "AI Researcher",
            "Quantitative Analyst",
            "Big Data Engineer",
            "Data Science Manager",
          ],
          educational_pathways_and_skill_development:
            "Study Computer Science or Applied Statistics. Learn Python, R, and data analysis libraries such as pandas and NumPy. Take online courses on machine learning, AI, and deep learning. Get hands-on with data visualization tools like Power BI and Tableau.",
          mindset_and_attitude_development:
            "Be open to continuous learning. Practice presenting complex data in a simple way. Build patience to work through ambiguity. Join online data challenges and data communities for experience and feedback.",
          career_trends_and_future_outlook:
            "Demand for data professionals is booming, especially in India’s finance, healthcare, and logistics sectors. Data Scientists with domain knowledge are highly sought after, and salaries can go upwards of ₹15 LPA with experience.",
        },
        {
          role: "AI/ML Engineer",
          why_it_matches_profile:
            "Her deep interest in automation and neural networks makes her a strong candidate for AI/ML roles. Ananya has completed several beginner-level AI projects using TensorFlow and scikit-learn.",
          potential_job_roles_and_growth_opportunities: [
            "ML Engineer",
            "AI Developer",
            "NLP Engineer",
            "Computer Vision Specialist",
            "Robotics Engineer",
            "AI Product Manager",
          ],
          educational_pathways_and_skill_development:
            "Pursue a Computer Science degree with electives in AI and robotics. Take up internships in AI startups. Learn about ML algorithms, NLP, and CNNs. Attend workshops and AI summits.",
          mindset_and_attitude_development:
            "Focus on ethical AI practices. Maintain curiosity to explore new models. Be resilient to failure in experimental results. Document and share learning through blogs or social media.",
          career_trends_and_future_outlook:
            "AI and ML fields are growing fast with applications in almost every sector. Jobs in India and abroad are booming, especially in MNCs and startups working on cutting-edge tech.",
        },
      ],
      summary:
        "Ananya is a focused and curious student with strong foundations in mathematics and data handling. She enjoys tackling abstract problems and has the creativity to find unique solutions. With her enthusiasm for learning and drive to explore AI, she is well-suited for innovative tech careers.",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      age: 18,
      grade: "12th",
      skills: [
        "Teamwork",
        "Public Speaking",
        "Decision Making",
        "Programming Logic",
        "Entrepreneurial Spirit",
        "Innovation",
      ],
      top_career_roles: [
        {
          role: "Tech Entrepreneur",
          why_it_matches_profile:
            "Rohan has a natural leadership quality and a keen interest in building technology products. He has participated in startup bootcamps and launched a prototype for an edtech app with his friends.",
          potential_job_roles_and_growth_opportunities: [
            "Startup Founder",
            "Product Manager",
            "Innovation Strategist",
            "Technology Consultant",
            "Business Analyst",
            "Venture Capital Associate",
          ],
          educational_pathways_and_skill_development:
            "Study Business Administration or Computer Science with entrepreneurship focus. Take part in innovation challenges and startup incubators. Learn coding, design thinking, and market validation techniques.",
          mindset_and_attitude_development:
            "Be open to failure and learn quickly. Think creatively. Build resilience and a customer-first mindset. Join entrepreneurial communities and seek mentorship from startup founders.",
          career_trends_and_future_outlook:
            "India’s startup ecosystem is among the fastest-growing. With government support and global funding, opportunities for young tech entrepreneurs are on the rise. Many early-stage founders are under 25.",
        },
        {
          role: "Full Stack Developer",
          why_it_matches_profile:
            "His practical skills in web development and passion for building complete applications position him well for full stack roles. Rohan actively learns modern JS frameworks and backend systems.",
          potential_job_roles_and_growth_opportunities: [
            "Frontend Engineer",
            "Backend Developer",
            "Web Application Architect",
            "Technical Lead",
            "CTO (in startups)",
            "Mobile App Developer",
          ],
          educational_pathways_and_skill_development:
            "Get a Computer Science degree or attend coding bootcamps. Learn React, Node.js, MongoDB, and DevOps tools. Build portfolio projects and contribute to open-source.",
          mindset_and_attitude_development:
            "Keep experimenting and learning. Embrace agile development practices. Collaborate well with designers and marketers. Stay active in tech communities.",
          career_trends_and_future_outlook:
            "The demand for versatile developers is high. Full stack roles offer flexibility and high salaries. Remote opportunities are increasing.",
        },
      ],
      summary:
        "Rohan is an innovative thinker and aspiring leader who enjoys building tech solutions with real-world impact. His interest in entrepreneurship and full stack development makes him an ideal candidate for dynamic tech careers requiring both technical and business skills.",
    },
    {
      id: 4,
      name: "Sanya Kapoor",
      age: 17,
      grade: "12th",
      skills: [
        "Empathy",
        "Organizational Skills",
        "Critical Thinking",
        "Digital Literacy",
        "Written Communication",
        "Analytical Thinking",
      ],
      top_career_roles: [
        {
          role: "UX Designer",
          why_it_matches_profile:
            "Sanya has a strong sense of design, empathy for users, and an ability to visualize user experiences. She has worked on UI/UX design projects for school events and received appreciation for her innovative interfaces.",
          potential_job_roles_and_growth_opportunities: [
            "UI Designer",
            "UX Researcher",
            "Interaction Designer",
            "Product Designer",
            "Design Strategist",
            "Accessibility Consultant",
          ],
          educational_pathways_and_skill_development:
            "Pursue a degree in Design, HCI, or Communication Design. Learn tools like Figma, Adobe XD, and Sketch. Practice wireframing, prototyping, and user testing. Attend design workshops and hackathons.",
          mindset_and_attitude_development:
            "Practice empathy and deep listening. Stay curious about human behavior. Think iteratively and embrace feedback. Build a strong design portfolio.",
          career_trends_and_future_outlook:
            "With a boom in digital products, UX roles are growing fast. Design thinking is being adopted widely. Companies prioritize good user experience, and salaries are competitive.",
        },
        {
          role: "Digital Marketing Strategist",
          why_it_matches_profile:
            "Her strength in communication, creativity, and digital tools makes her ideal for marketing strategy roles. Sanya has helped promote school events online with great success.",
          potential_job_roles_and_growth_opportunities: [
            "SEO Specialist",
            "Content Strategist",
            "Marketing Analyst",
            "Social Media Manager",
            "Brand Consultant",
            "Growth Hacker",
          ],
          educational_pathways_and_skill_development:
            "Study Mass Communication, Digital Media, or Marketing. Learn tools like Google Analytics, Canva, and SEMrush. Take courses in branding and ad strategy. Practice content creation and campaign planning.",
          mindset_and_attitude_development:
            "Stay updated on digital trends. Be creative and analytical. Learn to manage time effectively during campaigns. Be proactive in presenting ideas and learning from feedback.",
          career_trends_and_future_outlook:
            "Digital marketing is one of the fastest-growing fields in India. With companies moving online, there's high demand for strategists with digital skills. Freelancing and remote jobs are also rising.",
        },
      ],
      summary:
        "Sanya is a thoughtful and creative student with a passion for people-centered design and communication. Her balanced skills in both technical tools and user empathy make her highly suited for roles in design and digital media. She adapts quickly to trends and is an effective team collaborator.",
    },
  ];
  
  export default studentDataList;
  