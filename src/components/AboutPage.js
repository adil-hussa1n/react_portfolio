import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaBrain, 
  FaEnvelope, 
  FaFileDownload,
  FaCheckCircle
} from 'react-icons/fa';

const AboutPage = ({ theme }) => {
  useEffect(() => {
    document.title = "About Adil Hussain (Adil) | Software Engineer • ML, AI & Data Science";
    
    // Update meta description dynamically for /about
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about Adil Hussain (Adil), Software Engineer at Darun Tech Private Limited and CSE graduate from Leading University, Sylhet. Specializing in full-stack architecture, with independent expertise in machine learning, artificial intelligence, and data science."
      );
    }
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.adilhussa1n.online/about");
    }

    window.scrollTo(0, 0);

    return () => {
      document.title = "Adil Hussain (Adil) | Software Engineer • ML, AI & Data Science";
      if (canonical) {
        canonical.setAttribute("href", "https://www.adilhussa1n.online/");
      }
    };
  }, []);

  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-emerald-500" />,
      skills: ["React.js", "React Native", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Zustand", "Redux"]
    },
    {
      category: "Backend & Systems",
      icon: <FaServer className="text-cyan-500" />,
      skills: ["Node.js", "Express.js", "Laravel", "FastAPI", "Python", "RESTful APIs", "Socket.io", "Microservices"]
    },
    {
      category: "Databases & Storage",
      icon: <FaDatabase className="text-violet-500" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Sequelize", "Supabase", "Firebase"]
    },
    {
      category: "Machine Learning, AI & Data Science",
      icon: <FaBrain className="text-amber-500" />,
      skills: ["Machine Learning", "Data Science & Analytics", "Deep Learning & Vision (YOLOv8, OpenCV)", "Scikit-Learn", "Python", "FastAPI & Model Serving", "Pandas & NumPy", "Git & Docker"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 text-zinc-900 dark:text-white">
      {/* Navigation Header */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          to="/"
          id="about-back-home-btn"
          className="btn-aurora-outline inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md transition-all hover:-translate-x-1"
          aria-label="Back to Portfolio Homepage"
        >
          <FaArrowLeft className="text-xs" /> Back to Home
        </Link>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Profile &bull; adilhussa1n.online/about
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="aurora-card spotlight-card animated-border-card rounded-3xl p-6 sm:p-10 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Professional Photo */}
          <div className="relative flex-shrink-0 group">
            <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-cyan-500/10 relative z-10 bg-zinc-900">
              <img
                src="/images/adil-hussain.jpg"
                alt="Adil Hussain (Adil) - Software Engineer at Darun Tech Private Limited"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "/og-image.png";
                }}
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-3xl filter blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
          </div>

          {/* Profile Identity Details */}
          <div className="text-center md:text-left space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Software Engineer at Darun Tech Private Limited
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Adil Hussain <span className="sr-only">(Adil)</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Software Engineer at Darun Tech Private Limited, specializing in scalable enterprise systems and full-stack architecture. Independently researching, developing, and deploying solutions in Machine Learning, Artificial Intelligence, and Data Science.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="/resume10.pdf"
                download="adil-hussain_resume.pdf"
                className="btn-aurora inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20"
              >
                <FaFileDownload /> Download Resume
              </a>
              <a
                href="mailto:adil@daruntech.com"
                className="btn-aurora-outline inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/50 dark:bg-zinc-900/40"
              >
                <FaEnvelope /> adil@daruntech.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-3">
              <a
                href="https://www.linkedin.com/in/adil-hussa1n/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adil Hussain LinkedIn Profile"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/adil-hussa1n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adil Hussain GitHub Profile"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/adil_hussa1n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adil Hussain Twitter Profile"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/AD1LHUSSA1N/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adil Hussain Facebook Profile"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="aurora-card spotlight-card animated-border-card rounded-3xl p-6 sm:p-8 mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
          <span className="w-2.5 h-6 rounded-full bg-emerald-500"></span>
          Professional Biography
        </h2>
        <div className="text-zinc-600 dark:text-zinc-300 space-y-3.5 leading-relaxed text-sm sm:text-base">
          <p>
            I am Adil Hussain, a Software Engineer at <strong>Darun Tech Private Limited</strong> and a Computer Science &amp; Engineering graduate from <strong>Leading University, Sylhet</strong>.
          </p>
          <p>
            <strong>Professionally</strong>, I architect and build enterprise multi-tenant systems, POS and inventory applications, and real-time community platforms at Darun Tech. My production engineering stack encompasses modern React (v19), Node.js, Express, MySQL, MongoDB, Laravel, and cloud architectures.
          </p>
          <p>
            <strong>Independently</strong>, I actively research, develop, and deploy solutions in Machine Learning, Artificial Intelligence, and Data Science. My independent projects include intelligent computer vision systems (Sentinel AI with YOLOv8 &amp; OpenCV) and predictive NLP machine learning models (AI Personality Prediction with Scikit-learn &amp; FastAPI).
          </p>
          <p>
            Beyond software development, I actively mentor upcoming engineers, lead university initiatives as former General Secretary of the Steering Committee at LUCC (Leading University Computer Club), and contribute to open-source technologies.
          </p>
        </div>
      </div>

      {/* Professional Experience & Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Experience */}
        <div className="aurora-card spotlight-card animated-border-card rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-500">
              <FaBriefcase className="text-xl" />
            </div>
            <h2 className="text-xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Darun Tech Full Time */}
            <div className="relative pl-5 border-l-2 border-emerald-500">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                CURRENT ROLE
              </span>
              <h3 className="font-bold text-base mt-1">Software Engineer</h3>
              <p className="text-xs text-zinc-500">Darun Tech Private Limited &bull; Oct 2026 &ndash; Present</p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Architecting core SaaS services, multi-tenant POS platforms, and automated workflow engines.
              </p>
            </div>

            {/* Darun Tech Part Time */}
            <div className="relative pl-5 border-l-2 border-zinc-300 dark:border-zinc-700">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-zinc-400"></div>
              <h3 className="font-bold text-base">Part-Time Remote Web Developer</h3>
              <p className="text-xs text-zinc-500">Darun Tech &bull; Oct 2024 &ndash; Sep 2026</p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Full-stack web application development with React, Node.js, Express, and RESTful APIs.
              </p>
            </div>

            {/* AC Tech */}
            <div className="relative pl-5 border-l-2 border-zinc-300 dark:border-zinc-700">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-zinc-400"></div>
              <h3 className="font-bold text-base">Full-Stack Web Developer</h3>
              <p className="text-xs text-zinc-500">AC Tech &bull; 2023 &ndash; 2024</p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Developed responsive web interfaces, authentication systems, and database integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Leadership */}
        <div className="aurora-card spotlight-card animated-border-card rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-500">
              <FaGraduationCap className="text-xl" />
            </div>
            <h2 className="text-xl font-bold">Education & Leadership</h2>
          </div>

          <div className="space-y-6">
            {/* Degree */}
            <div className="relative pl-5 border-l-2 border-cyan-500">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-500"></div>
              <h3 className="font-bold text-base">B.Sc. in Computer Science & Engineering</h3>
              <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">Leading University, Sylhet</p>
              <p className="text-xs text-zinc-500">Graduation: May 2025</p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Focused on software architecture, algorithms, distributed databases, machine learning, and computer vision.
              </p>
            </div>

            {/* LUCC Leadership */}
            <div className="relative pl-5 border-l-2 border-zinc-300 dark:border-zinc-700">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-zinc-400"></div>
              <h3 className="font-bold text-base">General Secretary, Steering Committee</h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Leading University Computer Club (LUCC)</p>
              <p className="text-xs text-zinc-500">2024 &ndash; 2025</p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Directed tech symposiums, inter-university hackathons, programming workshops, and peer mentorship programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Expertise Grid */}
      <div className="aurora-card spotlight-card animated-border-card rounded-3xl p-6 sm:p-8 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 mb-6">
          <span className="w-2.5 h-6 rounded-full bg-cyan-500"></span>
          Technical Competencies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.map((cat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/30">
              <div className="flex items-center gap-2 mb-3">
                {cat.icon}
                <h3 className="font-bold text-xs sm:text-sm">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-700 dark:text-zinc-300"
                  >
                    <FaCheckCircle className="text-[9px] text-emerald-500" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-2">Want to build something impactful together?</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mb-6">
          I am always open to engineering challenges, high-scale SaaS architectures, and applied AI initiatives.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/#contact"
            className="btn-aurora px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
          >
            Get In Touch
          </Link>
          <Link
            to="/#portfolio"
            className="btn-aurora-outline px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 bg-white/60 dark:bg-zinc-900/40"
          >
            View Projects Showcase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
