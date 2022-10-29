import { useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

import './App.css'

function App() {
	const [theme, setTheme] = useState({ darkMode: "dark" });

	function toggleDarkMode() {
		setTheme(prev => {
			return {
				...prev,
				darkMode: !prev.darkMode
			}
		});
	}

	return (
		<div className="container">
			<Navbar darkMode={theme.darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={theme.darkMode} />
		</div>
	)
}

export default App
