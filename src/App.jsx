import './App.css'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="max-w-5xl w-11/12 mx-auto">
				<Intro />
				<Portfolio />
        <Timeline />
        <Footer />
			</div>
    </>
  )
}

export default App
