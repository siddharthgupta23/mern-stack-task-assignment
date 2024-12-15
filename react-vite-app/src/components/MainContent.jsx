// import React from 'react';
// import PostCard from './PostCard';

// function MainContent() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-12">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uu6XElJkvPqElyuSYafPRAa8sqHqx8xVa47gXo4Vvz2vHaK3fSjAQ~PcJRQITE2PMgfvBUTQ7qUnXvkWVxN~3nZxsdQ6JzVIaZGnlZbBalJ-NwEotEF7LTy3wLIp7bgS~x7bvic5QVrSeliN9gUeRi6be9egKnrnY22h1kRigezrkf5ISiSPeuS-H-Joyc91R5NU5Sz9uAcUrkRmASgZdd3BBLlFvv983LLvWt6WZljXEmKt4iNhcmSmyYicacBy~vP1nKmjEpYZAC~RXsfhHY-42Cyd5jDjpIAI1GNtPL~NGIjiR4zGfBs2f~PCYa~LGfy92N5qpYCgi~E9ILHHpQ__"
//             alt="Main"
//             className="img-fluid"
//             style={{ width: '1440px', height: '440px', objectFit: 'cover' }}
//           />
//           <div className="position-absolute" style={{ top: '378px', left: '200px' }}>
//             <h3>Computer Engineering</h3>
//             <p>With these many followers follow this</p>
//           </div>
//           <div className="position-absolute" style={{ top: '599px', left: '200px' }}>
//             <ul className="list-unstyled">
//               <li>Heading1</li>
//               <li>Heading2</li>
//               <li>Heading3</li>
//               <li>Heading4</li>
//               <li>Heading5</li>
//             </ul>
//           </div>
//           <PostCard />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainContent;
// import React, { useState } from "react";
// import PostCard from "./PostCard";
// import Groups from "./Groups";

// const MainContent = () => {
//   const [groupsVisible, setGroupsVisible] = useState(false);
//   const [writingPost, setWritingPost] = useState(false);

//   const toggleGroups = () => {
//     setGroupsVisible(!groupsVisible);
//   };

//   const suggestedGroups = [
//     { name: "Group 1", image: "https://via.placeholder.com/40" },
//     { name: "Group 2", image: "https://via.placeholder.com/40" },
//     { name: "Group 3", image: "https://via.placeholder.com/40" },
//     { name: "Group 4", image: "https://via.placeholder.com/40" },
//   ];

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-8">
//           {/* Top Section with Image and Headings */}
//           <div className="card mb-4" style={{ position: "relative" }}>
//             <img
//               src="https://via.placeholder.com/1440x440"
//               className="card-img-top"
//               alt="Top Section"
//               style={{
//                 width: "1440px",
//                 height: "440px",
//                 top: "72px",
//                 gap: "0px",
//               }}
//             />
//             <div className="card-body">
//               <>
//                 <h5
//                   className="card-title"
//                   style={{
//                     position: "absolute",
//                     top: "358px",
//                     left: "200px",
//                     fontSize: "36px",
//                     lineHeight: "46.8px",
//                     textAlign: "left",
//                     textUnderlinePosition: "from-font",
//                     textDecorationSkipInk: "none",
//                     fontFamily: "IBM Plex Sans",
//                     background: "rgba(255, 255, 255, 1)",
//                   }}
//                 >
//                   Computer Engineering
//                 </h5>
//               </>

//               <p
//                 className="card-text"
//                 style={{ position: "absolute", top: "410px", left: "200px" }}
//               >
//                 10,000 Followers - Follow this page for updates.
//               </p>
//               <div
//                 style={{
//                   width: "1040px",
//                   height: "0px",
//                   top: "600px",
//                   left: "200px",
//                   gap: "0px",
//                   border: "1px 0px 0px 0px",
//                 }}
//               >
//                 <ul
//                   className="d-flex"
//                   style={{
//                     width: "358px",
//                     height: "21px",
//                     top: "559px",
//                     left: "200px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       width: "93px",
//                       height: "21px",
//                       top: "559px",
//                       left: "200px",
//                       gap:"0px",
//                       lineHeight: "20.8px",
//                       fontSize: "16px",
//                       textUnderlinePosition: "from-font",
//                       textDecorationSkipInk: "none",
//                       fontFamily: "IBM Plex Sans",
//                       color: "rgba(0, 0, 0, 1)",
//                     }}
//                   >
//                     All Posts(32)
//                   </p>
//                   <p
//                     style={{
//                       width: "47px",
//                       height: "21px",
//                       top: "559px",
//                       left: "313px",
//                       gap:"0px",
//                       lineHeight: "20.8px",
//                       fontSize: "16px",
//                       textUnderlinePosition: "from-font",
//                       textDecorationSkipInk: "none",
//                       fontFamily: "IBM Plex Sans",
//                       color:" rgba(138, 138, 138, 1)",
//                     }}
//                   >
//                     Article
//                   </p>
//                   <p
//                     style={{
//                       width: "41px",
//                       height: "21px",
//                       top: "559px",
//                       left: "358px",
//                       gap: "0px",
//                       fontSize: "16px",
//                       lineHeight: "20.8px",
//                       textUnderlinePosition: "from-font",
//                       textDecorationSkipInk: "none",
//                       fontFamily: "IBM Plex Sans",
//                       color: "rgba(138, 138, 138, 1)",
//                     }}
//                   >
//                     Event
//                   </p>
//                   <p
//                     style={{
//                       width: "72px",
//                       height: "21px",
//                       top: "559px",
//                       left: "439px",
//                       fontSize: "16px",
//                       lineHeight: "20.8px",
//                       textUnderlinePosition: "from-font",
//                       textDecorationSkipInk: "none",
//                       fontFamily: "IBM Plex Sans",
//                       color: "rgba(138, 138, 138, 1)",
//                     }}
//                   >
//                     Education
//                   </p>
//                   <p
//                     style={{
//                       width: "27px",
//                       height: "21px",
//                       top: "559px",
//                       left: "531px",
//                       fontSize: "16px",
//                       lineHeight: "20.8px",
//                       textUnderlinePosition: "from-font",
//                       textDecorationSkipInk: "none",
//                       fontFamily: "IBM Plex Sans",
//                       color:"rgba(138, 138, 138, 1)",

//                     }}
//                   >
//                     Job
//                   </p>
//                 </ul>

//                 <button
//  style={{width: "133px",
//  height:"36px",
//  top: "552px",
//  left: "966px",
//  gap: "0px",
//  borderradius: "4px 0px 0px 0px",
//  opacity: "0px",
// }}
// onClick={() => setWritingPost(!writingPost)}
// >
//           {writingPost ? "Cancel" : "Write a Post"}
//         </button>
//         {writingPost && (
//             <div className="mb-3">
//             <textarea
//               className="form-control mb-2"
//               placeholder="Write your post here..."
//               ></textarea>
//             <button className="btn btn-primary w-100">Post</button>
//           </div>
//         )}

//         {/* Join/Leave Group Button */}
//         <button className="btn btn-secondary w-100" onClick={toggleGroups}>
//           {groupsVisible ? "Leave Group" : "Join Group"}
//         </button>

//         {/* Suggested Groups Section */}
//         {groupsVisible && <Groups groups={suggestedGroups} />}

// <div>

//         {/* Posts Section */}
//         <PostCard />
// </div>

//       {/* <div className="col-md-4">

//         <button
//           className="btn btn-secondary w-100 mb-3"
//           onClick={() => setWritingPost(!writingPost)}
//         >
//           {writingPost ? "Cancel" : "Write a Post"}
//         </button>
//         {writingPost && (
//           <div className="mb-3">
//             <textarea
//               className="form-control mb-2"
//               placeholder="Write your post here..."
//             ></textarea>
//             <button className="btn btn-primary w-100">Post</button>
//           </div>
//         )}

//         <button className="btn btn-secondary w-100" onClick={toggleGroups}>
//           {groupsVisible ? "Leave Group" : "Join Group"}
//         </button>

//         {groupsVisible && <Groups groups={suggestedGroups} />}
//       </div> */}

//     </div>

//   );
// };

// export default MainContent;

import React, { useState } from "react";
import PostCard from "./PostCard";
import Groups from "./Groups";

const MainContent = () => {
  
  const [groupsVisible, setGroupsVisible] = useState(false);
  const [writingPost, setWritingPost] = useState(false);

  const toggleGroups = () => {
    setGroupsVisible(!groupsVisible);
  };

  const suggestedGroups = [
    { name: "Group 1", image: "image45.png" },
    { name: "Group 2", image: "image46.png" },
    { name: "Group 3", image: "image47.png" },
    { name: "Group 4", image: "image48.png" },
  ];

  return (
    
    <div className="container mt-5">
      <div className="row">
        {/* Main Content Section */}
        <div className="col-md-8">
          {/* Top Section with Image and Headings */}
          <div className="card mb-4" style={{ position: "relative" }}>
            <img
              src="image222.png"
              className="card-img-top"
              alt="Top Section"
              style={{ width: "150%", height: "440px" }}
            />

            <div className="card-body">
              {/* Title Section */}
              <h5
                className="card-title"
                style={{
                  position: "absolute",
                  top: "358px",
                  left: "200px",
                  fontSize: "36px",
                  lineHeight: "46.8px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  fontFamily: "IBM Plex Sans",
                  background: "rgba(255, 255, 255, 1)",
                }}
              >
                Computer Engineering
              </h5>

              <p
                className="card-text"
                style={{ position: "absolute", top: "410px", left: "200px" }}
              >
                10,000 Followers - Follow this page for updates.
              </p>

              {/* Navigation Menu Section */}
              <div
                style={{
                  width: "1040px",
                  height: "0px",
                  marginTop: "50px",
                  marginLeft: "30px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <ul
                  className="d-flex"
                  style={{ listStyle: "none", padding: 0, marginTop: "20px" }}
                >
                  <li
                    style={{
                      marginRight: "20px",
                      fontSize: "16px",
                      fontFamily: "IBM Plex Sans",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    All Posts (32)
                  </li>
                  <li
                    style={{
                      marginRight: "20px",
                      fontSize: "16px",
                      fontFamily: "IBM Plex Sans",
                      color: "rgba(138, 138, 138, 1)",
                    }}
                  >
                    Article
                  </li>
                  <li
                    style={{
                      marginRight: "20px",
                      fontSize: "16px",
                      fontFamily: "IBM Plex Sans",
                      color: "rgba(138, 138, 138, 1)",
                    }}
                  >
                    Event
                  </li>
                  <li
                    style={{
                      marginRight: "20px",
                      fontSize: "16px",
                      fontFamily: "IBM Plex Sans",
                      color: "rgba(138, 138, 138, 1)",
                    }}
                  >
                    Education
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      fontFamily: "IBM Plex Sans",
                      color: "rgba(138, 138, 138, 1)",
                    }}
                  >
                    Job
                  </li>
                </ul>
              </div>
              {/* Action Buttons */}

              {/* Write a Post Button */}
              <button
                style={{
                  width: "212px",
                  height: "36px",
                  borderRadius: "4px",
                  marginTop: "12px",
                  marginLeft: "888px",
                  gap: "0px",
                }}
                onClick={() => setWritingPost(!writingPost)}
              >
                {writingPost ? "Cancel" : "Write a Post"}
                <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
              </button>

              {/* Join/Leave Group Button */}
              {/* Join/Leave Group Button */}
              <button
                className="btn btn-secondary"
                onClick={toggleGroups}
                style={{
                  width: "212px",
                  height: "36px",
                  marginTop: "11px",
                  marginLeft: "888px",
                  marginRight: "22px",
                  gap: "0px",
                }}
              >
                   <img
      src="https://via.placeholder.com/16" // Replace with group icon or Font Awesome icon
      alt="Group Icon"
      style={{ marginRight: "5px" }}
    />
                {groupsVisible ? "Leave Group" : "Join Group"}
              </button>

              {/* Write Post Section */}
              {writingPost && (
                <div className="mb-3 mt-3">
                  <textarea
                    className="form-control mb-2"
                    placeholder="Write your post here..."
                  ></textarea>
                  <button className="btn btn-primary w-100">Post</button>
                </div>
              )}

              {/* Suggested Groups Section */}
              {groupsVisible && <Groups groups={suggestedGroups} />}
            </div>
          </div>
          <div>
            {/* Posts Section */}
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
