import React from "react";
import img1 from "../assets/malaisi.jpg";

const Facilities2 = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img1} alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Destination Highlights
            </h1>
            <p style={{ marginTop: "8px" }}>
              Embark on an adventure to Malaysia
            </p>
            <p>Begin your journey in the capital of Kuala Lumpur.</p>
            <p>
              Experience the rich tapestry of Malaysia's multicultural society
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities2;

// import React from 'react';
// import "./FacilitiesStyles.css";
// import FacilitiesData from './FacilitiesData';

// function Facilities2() {
//   return (
//     <>
//       <div className="mainfac2">
//         <div className="facilitycard">
//           <FacilitiesData
//             image={
//               "https://andtour-react.netlify.app/static/media/hotel3.7daea2be758071426c02.png"
//             }
//             heading="Beach Resort"
//             text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
//           />
//           <FacilitiesData
//             image={
//               "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg"
//             }
//             heading="Mountain Climbing  "
//             text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
//           />
//           <FacilitiesData
//             image={
//               "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg"
//             }
//             heading="Hot Air Balloon"
//             text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Facilities2
