import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import http from './services/Axios'
import AuthContext from './services/UserContext'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import VideoC from './pages/Courses/VideoC'
import Courses from './pages/Courses/Courses/Courses'

function App() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [sections, setSections] = useState([]);
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    http.get('users/')
      .then(res => {
        setUser(res.data)
        console.log(res.data);
      })

    http.get('/jobs')
      .then(res => {
        setJobs(res.data)
        console.log(res.data);
      })

    http.get('/sections')
      .then(res => {
        setSections(res.data)
        console.log(res.data);
      })

    http.get('/themes')
      .then(res => {
        setThemes(res.data)
        console.log(res.data);
      })



    let authUser = window.localStorage.getItem('authUser')
    if (authUser) {
      setAuth(JSON.parse(authUser))
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: user }}>
      <Router>
        <Routes>
          {auth !== null
            ? <Route path='/' element={<Home />} />
            : <Route path='/' element={<Login setAuth={setAuth} />} />}
          <Route path="/contact" exact element={<Contacts />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route
            path="/video/:id"
            exact
            element={<VideoC videos={themes} />}
          />
        </Routes>
      </Router>
      <div>
        <h1>{user?.first_name}</h1>
      </div>
    </AuthContext.Provider>
  );
}

export default App
