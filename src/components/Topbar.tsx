import { useState } from 'react'

const navItems = [
	{ label: 'HOME', href: '#home' },
	{ label: 'ARCHITECTURE', href: '#architecture' },
	{ label: 'ABOUT US', href: '#about-us' },
	{ label: 'TEAM', href: '#team' }
	
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
			<nav className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">	
				<div className="flex-shrink-0">
					<p className="text-2xl font-bold tracking-[0.01em] sm:text-2xl text-zinc-200">rbAI</p>
				</div>
				<ul className="ml-13 order-3 flex w-full items-center justify-center gap-x-2 gap-y-2 pb-1 sm:order-2 sm:w-auto sm:gap-x-6 lg:gap-x-8">
					{navItems.map((item) => (
						<li key={item.label}>
							<button
								onClick={() => handleNavClick(item.href)}
								className={`relative rounded px-2 py-1 text-[11px] text-semibold tracking-[0.06em] text-white transition-colors duration-300 hover:text-gray-300 sm:text-sm sm:tracking-[0.02em] cursor-pointer bg-none border-none after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:origin-center after:bg-white after:transition-transform after:duration-200 ${
									activeHref === item.href ? 'after:scale-x-100' : 'after:scale-x-0'
								}`}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
				<div className="order-2 flex-shrink-0 sm:order-3">
					<button
						onClick={() => handleNavClick('#home')}
						className="!bg-white !text-black border rounded-sm border-white px-5 py-2 text-xs font-medium transition duration-300 hover:!bg-zinc-800/20 hover:!text-white sm:px-8 sm:text-sm"
					>
						Get Started
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Topbar
