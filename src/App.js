import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
function App() {
  return (
    <Router>
        <div className='flex-col justify-between h-screen'>
          <Navbar />
          <main>
            <h1 className='text-xl text-blue'>contnet</h1>
          </main>
        </div>
    </Router>
  );
}

export default App;
