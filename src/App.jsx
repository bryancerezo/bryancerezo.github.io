import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  Terminal,
  Workflow,
  ClipboardList,
  Layers,
  GraduationCap,
  Award,
  Box,
  User,
  Briefcase,
  Lock,
  BarChart3,
  Settings,
  Cloud
} from 'lucide-react';

const NAVIGATION = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Expertise', href: '#competencies', icon: Workflow },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Box },
  { name: 'Education', href: '#education', icon: GraduationCap },
];

const WORK_EXPERIENCE = [
  {
    role: "Solutions Architect",
    company: "Globe Telecom",
    period: "Jun 2026 - Present",
    description: "Driving the design and evolution of high-scale telecommunications architectures to support next-generation digital services.",
    achievements: [
      "Engineering high-availability architectures aligned with 5G strategy.",
      "Providing architectural security and governance to ensure telco-standard SDLC compliance.",
      "Integrating edge computing and AI-driven technologies."
    ],
    tags: ["Solutions Architecture", "Telecommunications", "5G Strategy"]
  },
  {
    role: "Product Owner",
    company: "GCash",
    period: "Sep 2024 - May 2026",
    description: "Led product strategy and technical execution for the Philippines' leading e-wallet ecosystem.",
    achievements: [
      "Translated high-level strategy into actionable technical requirements.",
      "Facilitated Design Sprints to align UX goals with technical feasibility.",
      "Maximized ROI by balancing business requirements against platform velocity."
    ],
    tags: ["Product Ownership", "Agile", "FinTech"]
  },
  {
    role: "Solutions Architect",
    company: "UBX",
    assignedTo: "UnionBank of the Philippines",
    period: "Dec 2023 - Sep 2024",
    description: "Designed robust enterprise architectures for a leading traditional bank.",
    achievements: [
      "Engineered end-to-end architectures aligned with enterprise strategy.",
      "Provided architectural oversight and consulting to project teams.",
      "Integrated emerging technologies to evolve business models."
    ],
    tags: ["Enterprise Architecture", "Banking", "System Design"]
  }
];

const PROJECTS = [
  {
    title: "Basic Account Offboarding",
    company: "GCash",
    period: "2024 - 2026",
    role: "Product Owner",
    description: "Spearheaded the roadmap for a critical user offboarding initiative to ensure full compliance with BSP Circular 921 mandate.",
    tech: ["Compliance", "FinTech", "Roadmap"]
  },
  {
    title: "One NPS Platform",
    company: "UnionBank",
    period: "2024",
    role: "Solutions Architect",
    description: "Designed the end-to-end architecture to consolidate NPS scores from digital touchpoints into a central platform.",
    tech: ["Data Integration", "API Design", "Architecture"]
  }
];

const CORE_COMPETENCIES = [
  {
    title: "Product Leadership",
    items: ["Agile/Scrum", "Roadmap Development", "Stakeholder Management", "Backlog Grooming"],
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    title: "Architecture & Design",
    items: ["Solutions Architecture", "System Design", "Technical Specs", "Integration Strategy"],
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Security & Governance",
    items: ["SDLC Compliance", "Risk Mitigation", "Architectural Oversight", "Standards Definition"],
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Business Alignment",
    items: ["Strategic Roadmap", "ROI Analysis", "Feasibility Studies", "Vendor Management"],
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const TECH_ARSENAL = [
  { category: "Product & Management", items: ["Jira", "Figma", "Lucidchart", "Miro"], icon: <Settings className="w-5 h-5" /> },
  { category: "Cloud & Systems", items: ["AWS", "GCP", "Kubernetes", "API Gateway"], icon: <Cloud className="w-5 h-5" /> },
];

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{children}</h2>
    <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto md:mx-0 mb-4"></div>
    {subtitle && <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3 shadow-xl' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-900/20">
              <Workflow className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-none tracking-tight">BRYAN CEREZO</span>
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">IT Professional</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold hover:text-indigo-400 transition-colors uppercase tracking-wider">
                {item.name}
              </a>
            ))}
            <a 
              href="https://www.linkedin.com/in/bryancerezo/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-indigo-900/40"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {NAVIGATION.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium flex items-center gap-3 p-3 hover:bg-slate-900 rounded-xl">
                <item.icon className="w-5 h-5 text-indigo-500" />
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Strategy</span> & Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Excellence</span>.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I specialize in software architecture and product management, helping businesses scale through robust system design and technical leadership.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a href="#about" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-50 text-white font-bold rounded-2xl transition-all flex items-center gap-2 group shadow-xl shadow-indigo-900/30">
                View My Journey
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:thebryancerezo@gmail.com" className="p-4 text-slate-400 hover:text-white transition-colors bg-slate-900 rounded-2xl border border-slate-800 shadow-lg flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <span className="font-bold text-sm uppercase tracking-widest hidden sm:inline">Get in Touch</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center relative order-1 lg:order-2 py-12">
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-indigo-600/10 rounded-[3rem] blur-3xl"></div>
              <div className="w-full h-full bg-slate-900 rounded-[3rem] border border-slate-800 p-3 relative overflow-hidden shadow-2xl z-10">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-800 flex items-center justify-center border border-slate-700">
                   <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bryan&backgroundColor=b6e3f4" 
                    alt="Bryan Cerezo"
                    className="w-full h-full object-cover"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading subtitle="Based in Manila, working with global standards.">
                Professional Overview
              </SectionHeading>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">Solutions Architect and Product Owner</strong> specialized in the design and delivery of high-scale digital ecosystems.
                </p>
                <p>
                  I bridge the gap between complex business strategy and technical execution, focusing on scalable, compliant, and deeply integrated business solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { val: "7+", label: "Years Experience" },
                 { val: "Solutions", label: "Architect" },
                 { val: "Product", label: "Ownership" },
                 { val: "Global", label: "Standards" }
               ].map((stat, i) => (
                 <div key={i} className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 text-center">
                    <p className="text-3xl font-bold text-white mb-2">{stat.val}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <section id="competencies" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Strategic capabilities and the technical tools used to deliver impact.">
            Expertise & Arsenal
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {CORE_COMPETENCIES.map((comp, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-indigo-500/50 transition-all group">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-6">
                  {comp.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{comp.title}</h3>
                <ul className="space-y-2">
                  {comp.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 border-t border-slate-900">
            {TECH_ARSENAL.map((tech, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-indigo-400">{tech.icon}</div>
                  <h4 className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{tech.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-[10px] font-mono uppercase text-indigo-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="My professional journey bridging technical design and product leadership.">
            Work Experience
          </SectionHeading>
          
          <div className="space-y-12">
            {WORK_EXPERIENCE.map((job, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <p className="text-indigo-400 font-bold text-xs tracking-wider uppercase mb-1">{job.period}</p>
                    <p className="text-white font-extrabold text-lg uppercase">{job.company}</p>
                  </div>
                  <div className="md:col-span-4 bg-slate-900/30 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-900/50 transition-all relative">
                    <div className="absolute -left-10 md:-left-[4.2rem] top-8 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-950"></div>
                    <h3 className="text-2xl font-bold text-white mb-4">{job.role}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{job.description}</p>
                    <ul className="space-y-3 mb-6">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Individual initiatives spearheaded across FinTech, Banking, and Telco.">
            Individual Projects
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 hover:border-indigo-500/50 transition-all flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Box className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1">{project.company}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase">{project.period}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[9px] font-mono text-indigo-300 uppercase">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Workflow className="text-white w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Bryan Cerezo</h2>
          </div>
          <div className="flex justify-center gap-6 mb-12">
             <a href="mailto:thebryancerezo@gmail.com" className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all">
               <Mail className="w-6 h-6" />
             </a>
             <a href="https://www.linkedin.com/in/bryancerezo/" target="_blank" className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all">
               <Linkedin className="w-5 h-5" />
             </a>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">© 2026 BRYAN CEREZO • IT PROFESSIONAL</p>
        </div>
      </footer>
    </div>
  );
};

export default App;