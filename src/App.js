
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
// import Post from './components/Post'


function App() {
    
    // App level state
    return ( 
        <FeedbackProvider>
        <Router>
            {/* <Header text = "Feedback APP" /> */}
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        </>
                        }
                        ></Route>

                    <Route path='/about' element={<AboutPage />} /> 
                    {/* <Route path='/post/*' element={<Post />} />  */}
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App