// import React from 'react'
// import "./FacilitiesStyles.css"
// import FacilitiesData from './FacilitiesData'
// function Facilities() {
//   return (
//     <>
//     <div className='facility'>
// <h2>Experience Once In Your Life Time</h2>
// <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br></br>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br></br>Semantics, a large language ocean.</p>
//    <div className='facilitycard'>

//     <FacilitiesData
//     image={"https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg"}
//     heading="Good Foods"
//     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

//     />
//       <FacilitiesData
//     image={"https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg"}
//     heading="Travel Anywhere"
//     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

//     />
//       <FacilitiesData
//     image={"https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg"}
//     heading="Airplane"
//     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

//     />

//    </div>

//     </div>

//     </>
//   )
// }

// export default Facilities

import React from "react";
import "./FacilitiesStyles.css";
import Facilities1 from "./Facilities1";
import Facilities2 from "./Facilities2";
import Facilities3 from "./Facilities3";
import Facilities4 from "./Facilities4";
import Facilities5 from "./Facilities5";
import Facilities6 from "./Facilities6";
function Facilities() {
  return (
    <div class="bodyfac">
      <div className="facility" style={{backgroundColor:'coral',borderRadius:'15px'}}>
        <h2>Discover the World's Most Breathtaking Destinations</h2>
        <p>
          Explore the beauty of the world, from pristine beaches to ancient
          wonders. <br></br>Whether you're seeking adventure, relaxation, or
          cultural experiences, <br></br>{" "}these incredible destinations have
          something special for every traveler.
        </p>
      </div>
      <div className="myclass">
        <Facilities1 />
        <Facilities2 />
        <Facilities5 />
      </div>
      <div className="myclass1">
        <Facilities3 />
        <Facilities4 />
        <Facilities6 />
      </div>
    </div>
  );
}

export default Facilities;
