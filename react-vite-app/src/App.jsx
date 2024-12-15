// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Signup from './components/SignUp';
// import Signin from './components/SignIn';
// import MainContent from './components/MainContent';
// import PostCard from './components/PostCard';
// import Groups from './components/Groups';
// // import Footer from './components/Footer';

// const App = () => {
//   const [showSignup, setShowSignup] = useState(false);
//   const [showSignin, setShowSignin] = useState(false);

//   return (
//     <div>
//       <Navbar setShowSignup={setShowSignup} setShowSignin={setShowSignin} />
//       {showSignup && <Signup close={() => setShowSignup(false)} />}
//       {showSignin && <Signin close={() => setShowSignin(false)} />}
//       <MainContent />
//       <PostCard/>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import MainContent from './components/MainContent';
import PostCard from './components/PostCard';
import Groups from './components/Groups';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes for the pages */}
          <Route path="/" element={<MainContent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/posts" element={<PostCard />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;

