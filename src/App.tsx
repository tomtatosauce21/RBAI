import Topbar from './components/Topbar.tsx'
import admin_dp from './assets/admin_dp.png'
import stud_dp from './assets/stud_dp.png'
import coding from './assets/coding.jpg'
import qoute from './assets/qoute.png'
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
  const [flippedArchitecture, setFlippedArchitecture] = useState<Record<string, boolean>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const team = [
    { name: 'Lily Ann Dela Cruz, MSIT', role: 'Adviser', type: 'adviser', img: admin_dp },
    { name: 'Allan Khester Mesa', role: 'Leader', type: 'leader', img: stud_dp },
    { name: 'Yves Alcantara', role: 'Member', type: 'member', img: stud_dp },
    { name: 'Kenn-roe Basseg', role: 'Member', type: 'member', img: stud_dp },
    { name: 'Betina Soleil Telan', role: 'Member', type: 'member', img: stud_dp},
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

  return (
    <main className="relative min-h-screen overflow-x-hidden text-sm text-white">
      <Topbar />
      <section
        id="home"
        className="flex min-h-screen w-full flex-col items-start justify-center gap-10 border-b border-zinc-800 px-4 pb-16 pt-28 sm:px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-24 lg:pt-32"
        style={{ backgroundColor: '#191a1a' }}
      >
        <div className="w-full max-w-3xl space-y-4 text-left sm:space-y-5 lg:ml-12 xl:ml-10">
          <span className="inline-flex rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.8em] text-zinc-200 sm:px-5 sm:py-2 sm:text-[11px] sm:tracking-[0.12em]">
            The New Standard
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            The Future of Programming Education
          </h1>
          <p className="max-w-2xl text-base leading-relaxed tracking-[0.02em] text-gray-300 sm:text-lg lg:text-xl">
            We are revolutionizing programming education by teaching students how to think through complexity using code as their medium, rather than just how to write code.
          </p>
            <button className="mt-5 mb-7 !bg-white !text-black border rounded-xl border-white px-8 py-3 text-sm font-medium transition duration-300 hover:!bg-zinc-800/20 hover:!text-white sm:px-10">
              Get Started
          </button>
        </div>
        <div className="hidden w-full max-w-md flex-shrink-0 items-center justify-center lg:mr-8 lg:flex xl:mr-20 xl:max-w-lg mb-7">
          <div className="group min-w-[320px] rounded-xl border border-zinc-900 bg-zinc-900/50 border-t-10 p-2">
          <span>
              <p className="text-2xl font-bold tracking-[0.01em] sm:text-xl opacity-70 text-zinc-200 mb-3 mr-9 ">future.rbAI</p>
          </span>
            <img
              src={coding}
              alt="Coding"
              className="h-[280px] w-[340px] max-w-full rounded-xl object-cover grayscale opacity-70 transition duration-200 ease-out group-hover:grayscale-0 group-hover:opacity-100 lg:h-[320px] lg:w-[390px] xl:h-[500px] xl:w-[530px]"
            />
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="flex min-h-screen w-full items-start px-4 pb-16 pt-20 sm:px-6 md:px-10"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="mx-auto w-full max-w-[1760px] space-y-6">
          <p className="ml-8 text-xs font-sans uppercase tracking-[0.4em] text-zinc-500 sm:text-sm">Architecture</p>
          <h2 className="mb-12 mt-3 ml-6 text-3xl font-bold leading-none tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            Core Functionalities
          </h2>
          <div className="grid w-336 grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9 ml-[32px]">
            {functionalities.map((item) => (
              <article
                key={item.title}
                onClick={() =>
                  setFlippedArchitecture((prev) => ({
                    ...prev,
                    [item.title]: !prev[item.title],
                  }))
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setFlippedArchitecture((prev) => ({
                      ...prev,
                      [item.title]: !prev[item.title],
                    }));
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={!!flippedArchitecture[item.title]}
                className={`architecture-card group min-h-[360px] min-w-[160px] rounded-sm border border-zinc-800 bg-black transition duration-200 hover:border-zinc-200/50 cursor-pointer ${flippedArchitecture[item.title] ? 'ring-2 ring-white/30' : ''}`}
                style={{ backgroundColor: '#191a1a' }}
              >
                <div className={`architecture-card-inner ${flippedArchitecture[item.title] ? 'is-flipped' : ''}`}>
                  <div className="architecture-card-face architecture-card-front px-8 pb-8 pt-9">
                    <div className="mb-10 inline-flex h-15 w-15 items-center justify-center border border-zinc-800 bg-zinc-900 text-zinc-100 transition-colors duration-300 group-hover:bg-[#c6c6c7] group-hover:text-zinc-900 group-hover:border-[#c6c6c7]">
                      {renderFunctionalityIcon(item.icon)}
                    </div>
                    <h3 className="mb-5 selected team-card text-[1.30rem] font-semibold leading-tight text-zinc-100">{item.title}</h3>
                    <p className="text-[0.950rem] leading-relaxed text-zinc-300">{item.description}</p>
                  </div>

                  <div className="architecture-card-face architecture-card-back px-8 pb-8 pt-9">
                    <h3 className="mb-5 text-[1.30rem] font-semibold leading-tight text-zinc-100">{item.title}</h3>
                    <p className="text-[0.900rem] leading-relaxed text-zinc-400">{item.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    <section
        id="about-us"
        className="relative min-h-screen w-full px-4 pb-16 pt-24 sm:px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#191a1a' }}>
        <div className="mx-auto w-full max-w-[1460px]">
          <p className="ml-7 text-xs font-sans uppercase tracking-[0.4em] text-zinc-400/80 sm:text-sm">
            Foundation
          </p>
          <h2 className="mt-3 ml-5 text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl md:text-5xl">
            About Us
          </h2>

          <div className=" ml-4 mt-12 grid w-335 grid-cols-1 gap-[0.02em] md:grid-cols-2">
            <div className="relative min-h-[360px] border border-zinc-800 bg-black p-6 transition duration-200 hover:bg-[#1f2020]/80 sm:p-10 lg:p-12">
              <span className="inline-flex h-16 w-16 items-center justify-center bg-zinc-700/70 text-zinc-100">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">Our Mission</h3>
              <p className="mt-6 max-w-[620px] text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-xl">
                To empower the next generation of software engineers by bridging the gap between syntax memorization and
                algorithmic thinking. We believe in providing the tools for deep, analytical comprehension.
              </p>
            </div>

            <div className="relative min-h-[360px] border border-zinc-800 bg-black p-6 transition duration-200 hover:bg-[#1f2020]/80 sm:p-10 lg:p-12">
              <span className="inline-flex h-16 w-16 items-center justify-center bg-zinc-700/70 text-zinc-100">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">Our Vision</h3>
              <p className="mt-6 max-w-[620px] text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-xl">
                A world where programming is taught through the lens of human cognition, making high-level technical
                skills accessible, intuitive, and fundamentally sustainable for students everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="relative flex min-h-screen w-full flex-col items-center overflow-hidden border-t border-white/5 bg-transparent px-4 pb-16 pt-24 sm:px-6 md:px-10">
        <div className="mx-auto w-full max-w-[1300px]">
          <p className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400/80 sm:text-sm">Architects</p>
          <p className="mt-4 text-3xl font-bold uppercase tracking-[0.01em] text-zinc-200 sm:text-4xl md:text-5xl">
            Meet our Team
          </p>

        <div className="relative z-10 mx-auto mt-14 flex w-full flex-1 flex-col items-center justify-center px-0 sm:px-2 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-16 justify-center w-full">
            {team.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="team-card flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-full mb-6 bg-gray-100 border-4 border-white transition-all duration-300 shadow-sm">
                    <img src={person.img} alt={person.name} className="team-img w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">{person.name}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section id="Philosophy"
          className="flex min-h-[90vh] w-full items-center justify-center border-b border-zinc-800 bg-zinc-900 px-4 pb-10 pt-20 sm:px-6 md:px-10 lg:pt-24" style={{background: '#191a1a'}}>
          <div className="w-full max-w-3xl text-center">
            <img
              src={qoute}
              alt="qoute"
              className="mx-auto mb-4 h-14 w-14 object-contain sm:h-20 sm:w-16"
            />
            <p className="mb-5 font-sans text-2xl font-extralight italic leading-[1.25em] text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl mb-10">
              We don't teach students how to write code. We teach them how to think through complexity using code as their medium.</p>
            <div className="mx-auto mb-6 h-px w-100 bg-zinc-500/70 leading-[8.5em]" aria-hidden="true"> </div>
           <p className="mb-10 text-xs font-family: var(--sans-serif) tracking-[0.35em] text-zinc-400 sm:text-sm sm:tracking-[0.16em]">
              — Our Philosophy
            </p>
          </div>
        </section>


      <footer className="w-full border-t border-zinc-800 bg-black px-4 py-10 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto"> 
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="text-zinc-500 text-sm">
                © 2026 Programming Education Platform. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-zinc-400 hover:text-white transition cursor-pointer">
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition cursor-pointer">
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition cursor-pointer">
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-white !text-black rounded-full hover:bg-zinc-300 transition duration-300 animate-in fade-in slide-in-from-bottom-4"
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
 