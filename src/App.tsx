import Topbar from './components/Topbar.tsx'
import heroDp from './assets/hero.png'
import Yves from './assets/Yves.jpg'
import Shine from './assets/Shine.jpg'
import coding from './assets/coding.jpg'
import { useState, useEffect } from 'react'
import './App.css'

type FunctionalityIcon = 'monitoring' | 'orchestration' | 'support' | 'ces'

type FunctionalityItem = {
  title: string
  description: string
  icon: FunctionalityIcon
  details: string
}

const functionalities: FunctionalityItem[] = [
  {
    title: 'Behavior-Driven Monitoring',
    description:
      'Captures fine-grained telemetry to model cognitive engagement and identify potential learning blocks in real-time.',
    details: 'Advanced analytics track student interactions, code quality changes, and problem-solving patterns to provide actionable insights for educators.',
    icon: 'monitoring',
  },
  {
    title: 'Context-Aware AI Orchestration',
    description:
      "Tailors responses to the student's actual working condition using deep code state analysis and behavioral historical data.",
    details: 'Machine learning models analyze code structure, student history, and learning patterns to deliver personalized assistance at the right moment.',
    icon: 'orchestration',
  },
  {
    title: 'Interactive AI Assistance',
    description:
      'Acts as a Socratic tutor with hints and reflective prompts that guide discovery instead of providing direct code solutions.',
    details: 'Rather than giving answers, the AI asks guiding questions that help students develop critical thinking and problem-solving skills.',
    icon: 'support',
  },
  {
    title: 'Cognitive Engagement Score (CES)',
    description:
      'Provides integrity-aware insights for instructors based on subtle behavioral signals and learning trajectory.',
    details: 'Combines behavioral data with learning metrics to give educators a comprehensive view of student engagement without compromising academic integrity.',
    icon: 'ces',
  },
]

function renderFunctionalityIcon(icon: FunctionalityIcon) {
  switch (icon) {
    case 'monitoring':
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 15l4-4 3 2 5-6 4 3" />
          <path d="M4 20h16" />
        </svg>
      )
    case 'orchestration':
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
          <path d="M7 12h3M14 12h3M12 7v3M12 14v3" />
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3a7 7 0 00-7 7c0 2.7 1.5 5 3.8 6.2V21l3.2-1.8L15.2 21v-4.8A7 7 0 0019 10a7 7 0 00-7-7z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      )
    case 'ces':
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 4h14v16H5z" />
          <path d="M9 15v3M12 11v7M15 8v10" />
        </svg>
      )
  }
}

function App() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const team = [
    { name: 'Lily Ann Dela Cruz, MSIT', role: 'Adviser', type: 'adviser', bio: 'Expert in AI education and student learning outcomes', img: Yves },
    { name: 'Allan Khester Mesa', role: 'Leader', type: 'leader', bio: 'Leads the vision and technical strategy of RBAI', img: heroDp },
    { name: 'Yves Alcantara', role: 'Member', type: 'member', bio: 'Specializes in AI orchestration and system design', img: heroDp },
    { name: 'Kennroe Basseg', role: 'Member', type: 'member', bio: 'Focuses on behavioral monitoring and analytics', img: heroDp },
    { name: 'Shine Telan', role: 'Member', type: 'member', bio: 'Develops cognitive engagement scoring systems', img: Shine },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 4000);
    }
  };
  return (
    <main className="relative min-h-screen overflow-x-hidden text-sm text-white">
      <Topbar />
      <section
        id="home"
        className="flex h-screen w-full items-center justify-between border-b border-zinc-800 px-4 pb-120 pt-28 sm:px-6 md:px-10 lg:pt-100"
        style={{ backgroundColor: '#191a1a' }}
      >
        <div className="translate-x-[100px] w-full max-w-3xl space-y-4 text-left sm:space-y-5">
          <span className="inline-flex rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.8em] text-zinc-200 sm:px-5 sm:py-2 sm:text-[11px] sm:tracking-[0.12em]">
            The New Standard
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            The Future of Programming Education
          </h1>
          <p className="max-w-1xl text-wrap text-2xl leading-relaxed tracking-[0.04em] text-gray-300 sm:text-10xl">
            We are revolutionizing programming education by teaching students how to think through complexity using code as their medium, rather than just how to write code.
          </p>
            <button className="mt-15 !bg-white !text-black border border-white px-15 py-3 text-sm font-medium transition duration-300 hover:!bg-zinc-800/20 hover:!text-white">
              Get Started
          </button>
        </div>
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
          <div className="group rounded-none border border-zinc-900 bg-zinc-900/50 p-2 x-shadow-2xl mr-5 mt-30 max-w-[470px] w-full">
            <img
              src={coding}
              alt="Coding"
              className="rounded-xl h-auto w-auto object-scale-down grayscale opacity-70 transition duration-200 ease-out group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="flex min-h-screen w-full items-start px-6 pb-16 pt-20 sm:px-8 md:px-10"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="mx-auto w-full max-w-[1760px] space-y-6">
          <p className="mt-3 text-sm font-sans uppercase tracking-[0.50em] text-zinc-500 ml-28">Architecture</p>
          <h2 className="text-5xl font-bold leading-none tracking-tight text-zinc-100 sm:text-5xl md:text-5xl mb-10 ml-26">
            Core Functionalities
          </h2>
          <div className=" grid w-310 grid-cols-9 gap-8 md:grid-cols-4 xl:grid-cols-4 xl:gap-7 ml-27">
            {functionalities.map((item) => (
              <article
                key={item.title}
                onClick={() => setExpandedArchitecture(expandedArchitecture === item.title ? null : item.title)}
                className={`group min-h-[360px] rounded-sm border border-zinc-800 bg-black px-8 pb-8 pt-9 transition duration-200 hover:border-zinc-200/50 hover:bg-zinc-900/80 cursor-pointer ${expandedArchitecture === item.title ? 'ring-2 ring-white/30' : ''}`}
                style={{ backgroundColor: '#191a1a' }}
              >
                <div className="mb-10 inline-flex h-15 w-15 items-center justify-center border border-zinc-800 bg-zinc-900 text-zinc-100 transition-colors duration-300 group-hover:bg-[#c6c6c7] group-hover:text-zinc-900 group-hover:border-[#c6c6c7]">
                  {renderFunctionalityIcon(item.icon)}
                </div>
                <h3 className="mb-5 selected team-card text-[1.30rem] font-semibold leading-tight text-zinc-100  ">{item.title}</h3>
                <p className="text-[0.950rem] leading-relaxed text-zinc-300">{item.description}</p>
                {expandedArchitecture === item.title && (
                  <div className="mt-6 pt-6 border-t border-zinc-700 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[0.900rem] leading-relaxed text-zinc-400">{item.details}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

    <section
        id="about-us"
        className="relative min-h-screen w-full px-4 pb-16 pt-24 sm:px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#191a1a' }}>
        <div className="mx-auto w-full max-w-[1460px]">
          <p className="text-sm font-sans uppercase tracking-[0.50em] text-zinc-400/80 ml-20">
            Foundation
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-zinc-200 sm:text-5xl ml-19">
            About Us
          </h2>

          <div className="mt-12 grid w-310 grid-cols-1 gap-2 md:grid-cols-2 md:gap-[0.09rem] ml-20">
            <div className="relative min-h-[420px] border border-zinc-800 bg-black p-16 transition duration-200 hover:bg-[#1f2020]/80">
              <span className="inline-flex h-16 w-16 items-center justify-center bg-zinc-700/70 text-zinc-100">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <h3 className="mt-10 text-4xl font-semibold tracking-tight text-white">Our Mission</h3>
              <p className="mt-8 max-w-[620px] text-xl leading-relaxed text-zinc-300">
                To empower the next generation of software engineers by bridging the gap between syntax memorization and
                algorithmic thinking. We believe in providing the tools for deep, analytical comprehension.
              </p>
            </div>

            <div className="relative min-h-[420px] border border-zinc-800 bg-black p-16 transition duration-200 hover:bg-[#1f2020]/80">
              <span className="inline-flex h-16 w-16 items-center justify-center bg-zinc-700/70 text-zinc-100">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </span>
              <h3 className="mt-10 text-4xl font-semibold tracking-tight text-white">Our Vision</h3>
              <p className="mt-8 max-w-[620px] text-xl leading-relaxed text-zinc-300">
                A world where programming is taught through the lens of human cognition, making high-level technical
                skills accessible, intuitive, and fundamentally sustainable for students everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="relative w-full pt-24 min-h-screen flex flex-col items-center justify-between overflow-hidden bg-transparent border-t border-white/5">
       <p className="absolute left-10 top-6 z-30 text-1xl font-sans uppercase tracking-[0.50em] text-zinc-400/80 sm:left-20 sm:top-30 mt-3 ml-19">
          Architects
        </p>
        <p className="absolute left-30 top-6 z-30 text-5xl font-bold uppercase tracking-[0.01em] text-zinc-200 sm:left-20 sm:top-45 mb-10 ml-19">
          Meet our Team
        </p>

        <div className="relative z-10 max-w-[1300px] mx-auto w-full px-10 sm:px-6 md:px-8 flex-1 flex flex-col justify-center items-center mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-16 justify-center w-full">
            {team.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                  className={`team-card flex flex-col items-center transition-all duration-300 hover:-translate-y-2 cursor-pointer ${selectedMember === index ? 'selected' : ''}`}
                >
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-full mb-6 bg-gray-100 border-4 transition-all duration-300 shadow-sm" style={{ borderColor: selectedMember === index ? '#ffffff' : '#ffffff' }}>
                    <img src={person.img} alt={person.name} className="team-img w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">{person.name}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{person.role}</p>
                </div>
                {selectedMember === index && (
                  <div className="mt-4 p-4 bg-zinc-900/50 rounded border border-zinc-700 text-center max-w-xs animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-zinc-300">{person.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Philosophy"
          className="flex h-screen w-full items-center justify-center border-b border-zinc-800 px-4 pb-10 pt-28 sm:px-6 md:px-10 lg:pt-32 bg-zinc-900" style={{background: '#191a1a'}}>
          <div className="w-full max-w-3xl text-center">
            
            <p className="font-sans font-extralight italic text-gray-200 text-5xl leading-relaxed mb-5 ">
             <span className="font-bold text-[70px]" >"</span> We don't teach students how to write code. We teach them how to think through complexity using code as their medium.<span className="font-bold italic text-[70px]" >"</span></p>
            <div className="mx-auto mb-6 h-px w-40 bg-zinc-500/70 leading-[8.5em]" aria-hidden="true"> </div>
           <p className="font-semibold text-[#696f75] text-sm italic text-zinc-400 mb-10 tracking-[0.6em]">
              — Our Philosophy
            </p>
          
          </div>
        </section>


      <footer className="w-full bg-black border-t border-zinc-800 py-18 px-18 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-500 text-sm mb-4 md:mb-0">
                © 2026 Programming Education Platform. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-white text-black rounded-full hover:bg-zinc-300 transition duration-300 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </main>

  )
}

export default App
 