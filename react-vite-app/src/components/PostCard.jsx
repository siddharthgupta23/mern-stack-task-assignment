// import React from 'react';

// function PostCard() {
//   return (
//     <div className="post-card">
//       <div className="card" style={{ width: '692px', marginBottom: '20px' }}>
//         <img src="https://www.figma.com/file/UdeH6M0qJgUS05xNwgunYZ/image/8f0b5f5259515bfc8d2d4ff8928be097376153e9" className="card-img-top" alt="Post" />
//         <div className="card-body">
//           <h5 className="card-title">Article Heading</h5>
//           <p className="card-text">This is the article text...</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostCard;
import { left } from "@popperjs/core";
import React from "react";
import { useState } from "react";

const PostCard = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };
  return (
    <div
      className="card mb-4"
      style={{ width: "692px", height: "220px", position: "relative" }}
    >
      <div>
        <img
          src="image223.jpg"
          className="card-img-top"
          alt="Post Image"
          style={{
            borderRadius: "4px 4px 0px 0px",
            width: "692px",
            height: "220px",
            top: "628px",
            left: "200px",
            gap: "0px",
            opacity: "0px",
          }}
        />

        <div className="card-body">
          <p
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            ✍️ Article
          </p>
          <h5
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "22px",
              lineHeight: "29.52px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h5>
          <img
            src="Group 3.png"
            style={{
              width: "28px",
              height: "28px",
              lineHeight: "29.52px",
              textAlign: "right",
              marginLeft: "922px",
              padding: "0px",
              gap: "0px",
            }}
          ></img>
          <p
            className="card-text"
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "19px",
              lineHeight: "25.49px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <br></br>
          <img
            src="Rectangle 5.png"
            style={{
              width: "48px",
              height: "48px",
              marginTop: "11px",
              marginLeftleft: "219px",
              gap: "0px",
              borderRadius: "24px",
            }}
          />

          <p
            style={{
              width: "125px",
              height: "24px",
              marginTop: "11px",
              marginLeft: "1px",
              gap: "0px",
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Sartak Karma
          </p>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "646px",
              backgroundColor: "#fff", // Optional: customize as needed
              border: "1px solid #ccc", // Optional: customize as needed
              borderRadius: "4px", // Optional: customize as needed
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <img
              src="visibility_24px.png"
              alt="visibility"
              style={{
                width: "12px",
                height: "12px",
                marginRight: "6px", // Space between image and text
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#333", // Optional: customize as needed
                lineHeight: "1",
              }}
            >
              1.4K Views
            </span>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "782px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
              color: "rgba(237, 238, 240, 1)",
            }}
          >
            <img src="baseline-share-24px.png" alt="hello" />
          </button>
        </div>
        <br />
    
      </div>
      <br></br>
      <div>
        <img
          src="image224.jpg"
          className="card-img-top"
          alt="Post Image"
          style={{
            borderRadius: "4px 4px 0px 0px",
            width: "692px",
            height: "220px",
            top: "1116px",
            left: "200px",
            gap: "0px",
            opacity: "0px",
          }}
        />

        <div className="card-body">
          <p
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            🔬️ Education
          </p>
          <h5
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "22px",
              lineHeight: "29.52px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            Tax Benefits for Investment under National Pension Scheme launched
            by Government
          </h5>
          <img
            src="Group 3.png"
            style={{
              width: "28px",
              height: "28px",
              lineHeight: "29.52px",
              textAlign: "right",
              marginLeft: "922px",
              padding: "0px",
              gap: "0px",
            }}
          ></img>
          <p
            className="card-text"
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "19px",
              lineHeight: "25.49px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <br></br>
          <img
            src="Rectangle 7.png"
            style={{
              width: "48px",
              height: "48px",
              marginTop: "11px",
              marginLeftleft: "219px",
              gap: "0px",
              borderRadius: "24px",
            }}
          />

          <p
            style={{
              width: "125px",
              height: "24px",
              marginTop: "11px",
              marginLeft: "1px",
              gap: "0px",
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            SarahWest
          </p>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "646px",
              backgroundColor: "#fff", // Optional: customize as needed
              border: "1px solid #ccc", // Optional: customize as needed
              borderRadius: "4px", // Optional: customize as needed
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <img
              src="visibility_24px.png"
              alt="visibility"
              style={{
                width: "12px",
                height: "12px",
                marginRight: "6px", // Space between image and text
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#333", // Optional: customize as needed
                lineHeight: "1",
              }}
            >
              1.4K Views
            </span>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "782px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
              color: "rgba(237, 238, 240, 1)",
            }}
          >
            <img src="baseline-share-24px.png" alt="hello" />
          </button>
        </div>
        <br></br>

      </div>
      <div>
        <img
          src="image225.png"
          className="card-img-top"
          alt="Post Image"
          style={{
            borderRadius: "4px 4px 0px 0px",
            width: "692px",
            height: "220px",
            top: "1604px",
            left: "200px",
            gap: "0px",
            opacity: "0px",
          }}
        />

        <div className="card-body">
          <p
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
          🗓️ Meetup
          </p>
          <h5
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "22px",
              lineHeight: "29.52px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            Finance & Investment Elite Social Mixer @Lujiazui
          </h5>
          
        <div style={{ position: "relative" }}>
      <button
        onClick={handleButtonClick}
        style={{
          width: "28px",
          height: "28px",
          padding: "4.67px 0px",
          gap: "0px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <img
          src="Group 3.png"
          alt="Toggle Dropdown"
          style={{
            width: "28px",
            height: "28px",
            display: "block",
           
          }}
        />
      </button>
      {isDropdownVisible && (
        <select
          style={{
            position: "absolute",
            top: "35px", // Adjust dropdown positioning
            left: "0px",
            width: "120px", // Adjust as per your design
            padding: "5px",
            zIndex: 10,
          }}
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      )}
    </div>
          <div style={{ top: "1472px", left: "120px",  width: "958px",
                height: "70px",fontSize:"15px" }}>
            <p
              style={{
                width: "876px",
                height: "20px",
                top: "1620px",
                left: "220px",
                gap: "0px",
                opacity: "0px",
                fontFamily: "IBM Plex Sans",
                fontSize: "15px",
                lineHeight: "19.5px"
              }}
            >
              <img src="baseline-today-24px.png"/>
              

              Time: 2024-12-15 10:30 AM 
             </p>
              
               <p
              style={{
                width: "342px",
                height: "20px",
                top: "1620px",
                left: "450px",
                gap: "0px",
                opacity: "0px",
                fontFamily: "IBM Plex Sans",
                fontSize: "15px",
                lineHeight: "19.5px"
              }}>
            <img src="Outline.png"/>
           

                 Location: Ahemdabad,India
    
              </p>
           
          </div>
        <img src="Group 42.2.png"/>
          <br></br>
          <img
            src="Rectangle 3.png"
            style={{
              width: "48px",
              height: "48px",
              marginTop: "11px",
              marginLeftleft: "219px",
              gap: "0px",
              borderRadius: "24px",
            }}
          />

          <p
            style={{
              width: "125px",
              height: "24px",
              marginTop: "11px",
              marginLeft: "1px",
              gap: "0px",
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Ronal Jones
          </p>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "646px",
              backgroundColor: "#fff", // Optional: customize as needed
              border: "1px solid #ccc", // Optional: customize as needed
              borderRadius: "4px", // Optional: customize as needed
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <img
              src="visibility_24px.png"
              alt="visibility"
              style={{
                width: "12px",
                height: "12px",
                marginRight: "6px", // Space between image and text
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#333", // Optional: customize as needed
                lineHeight: "1",
              }}
            >
              1.4K Views
            </span>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "782px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
              color: "rgba(237, 238, 240, 1)",
            }}
          >
            <img src="baseline-share-24px.png" alt="hello" />
          </button>
        </div>
<br></br>
       
      </div>
      <div>
      

        <div className="card-body">
          <p
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
        💼️ Job
          </p>
          <h5
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "22px",
              lineHeight: "29.52px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
       Software Developer
          </h5>
          
          <img
            src="Group 3.png"
            style={{
              width: "28px",
              height: "28px",
              lineHeight: "29.52px",
              textAlign: "right",
              marginLeft: "922px",
              padding: "0px",
              gap: "0px",
            }}
          />
          <div style={{ top: "1472px", left: "120px",  width: "958px",
                height: "70px",fontSize:"15px" }}>
            <p
              style={{
                width: "876px",
                height: "20px",
                top: "1620px",
                left: "220px",
                gap: "0px",
                opacity: "0px",
                fontFamily: "IBM Plex Sans",
                fontSize: "15px",
                lineHeight: "19.5px"
              }}
            >
              <img src="outline-work_outline-24px (1).png"/>
              

              Innovaccer Analytics Private Ltd.
             </p>
              
               <p
              style={{
                width: "342px",
                height: "20px",
                top: "1620px",
                left: "450px",
                gap: "0px",
                opacity: "0px",
                fontFamily: "IBM Plex Sans",
                fontSize: "15px",
                lineHeight: "19.5px"
              }}>
            <img src="Outline.png"/>
           

                 Location: Noida,India
    
              </p>
           
          </div>
        <img src="Group 42.png"/>
          <br></br>
          <img
            src="Rectangle 3 (1).png"
            style={{
              width: "48px",
              height: "48px",
              marginTop: "11px",
              marginLeftleft: "219px",
              gap: "0px",
              borderRadius: "24px",
            }}
          />

          <p
            style={{
              width: "125px",
              height: "24px",
              marginTop: "11px",
              marginLeft: "1px",
              gap: "0px",
              fontFamily: "IBM Plex Sans",
              fontSize: "18px",
              lineHeight: "23.4px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Joseph Gray
          </p>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "646px",
              backgroundColor: "#fff", // Optional: customize as needed
              border: "1px solid #ccc", // Optional: customize as needed
              borderRadius: "4px", // Optional: customize as needed
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <img
              src="visibility_24px.png"
              alt="visibility"
              style={{
                width: "12px",
                height: "12px",
                marginRight: "6px", // Space between image and text
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#333", // Optional: customize as needed
                lineHeight: "1",
              }}
            >
              1.4K Views
            </span>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "30px",
              position: "absolute",
              marginTop: "0px",
              marginLeft: "782px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
              color: "rgba(237, 238, 240, 1)",
            }}
          >
            <img src="baseline-share-24px.png" alt="hello" />
          </button>
        </div>

     
      </div>


    
    </div>
  );
};

export default PostCard;
