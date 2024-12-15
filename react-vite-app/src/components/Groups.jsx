import React from 'react';

const Groups = ({ groups }) => {
  return (
    <div style={{ position: 'absolute', top: '743px', left: '995px' }}>
      {groups.map((group, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'right', marginBottom: '10px' }}>
          <img src={group.image} alt={group.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <p style={{ marginLeft: '10px',
        width: "104px",
        height: "19px",
        top: "394px",
        left: "1043px",
        gap: "0px",
       
         }}>{group.name}</p>
          <button style={{
            width: "60px",
            height: "24px",
            top:" 743px",
            left: "1175px",
            gap: "0px",
            borderRadius: "14px",
          }}><p style={{width: "36px",
            height: "16px",
            top: "395px",
            left: "1187px",
            gap: "0px", 
            fontFamily: "IBM Plex Sans",
fontSize: "12px",
lineHeight: "15.6px",
textAlign: "center",
textUnderlinePosition: "from-font",
textDecorationSkipInk: "none",

       
            }}>follow</p></button>
        </div>
      ))}
    </div>
  );
};

export default Groups;
