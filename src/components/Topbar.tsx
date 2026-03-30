import { useState } from 'react'
import Rabai from '../assets/Rbai.png'

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'Architecture', href: '#architecture' },
	{ label: 'About Us', href: '#about-us' },
	{ label: 'Team', href: '#team' },
	{ label: 'Contact', href: '#contact' }
	
]

function Topbar() {
	const [activeHref, setActiveHref] = useState(navItems[0].href)

	const handleNavClick = (href: string) => {
		setActiveHref(href)
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<header className="fixed top-0 left-0 z-50 w-full bg-[#191a1a]/50 backdrop-blur-2xl min-h-[80px]">
			<nav className="flex w-full items-center justify-between px-9 py-3 sm:px-6 sm:py-4">	
				<div className="flex-shrink-0">
					<img src={Rabai} alt="Rabai Logo" className="h-13 w-auto" />
				</div>
				<ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-8 lg:gap-x-14">
					{navItems.map((item) => (
						<li key={item.label}>
							<button
								onClick={() => handleNavClick(item.href)}
								className={`relative rounded px-2 py-1 text-xs font-sans tracking-[0.08em] text-white transition-colors duration-300 hover:text-gray-300 sm:text-sm sm:tracking-[0.12em] cursor-pointer bg-none border-none after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:origin-center after:bg-white after:transition-transform after:duration-200 ${
									activeHref === item.href ? 'after:scale-x-100' : 'after:scale-x-0'
								}`}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
				<div className="flex-shrink-0">
					<button
						onClick={() => handleNavClick('#home')}
						className="!bg-white !text-black border rounded-sm border-white px-13 py-2 text-sm font-medium transition duration-300 hover:!bg-zinc-800/20 hover:!text-white"
					>
						Get Started
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Topbar
