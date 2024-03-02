import PropTypes from "prop-types";

const WeatherCard = ({ imageSrc, city, features }) => {
  return (
    <div className="cardContainer relative flex items-center justify-center">
      <div className="card w-70 h-84 flex flex-col items-center justify-between p-5 rounded-3xl bg-opacity-30 bg-gray-800 border border-black cursor-pointer backdrop-filter backdrop-blur-sm">
        <div className="font-medium text-white text-lg leading-tight">
          {city}
        </div>
        <div className="font-medium text-sm text-gray-400">
          <img src={imageSrc} alt="wait" className="w-50 h-70" />
        </div>
        {/* <div className="mt-2 text-blue-200 text-sm md:text-lg space-y-3 flex flex-col font-tertiary">
          {features.map((feature, index) => (
            <p
              key={index}
              className="flex items-center gap-4 overflow-y-hidden"
            >
              {feature.icon} {feature.text}
            </p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WeatherCard;
// // const WeatherCard = () => {
// //   return (
// //     <div className="cardContainer relative flex items-center justify-center">
// //       <div className="card w-40 h-50 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-30 bg-gray-800 border border-white cursor-pointer backdrop-filter backdrop-blur-md">
// //         <img
// //           src="https://via.placeholder.com/150"
// //           alt="Weather Icon"
// //           className="w-20 h-20"
// //         />
// //         <div className="city font-bold text-white text-lg leading-tight">
// //           Artists
// //         </div>
// //         {/* <div className="weather font-medium text-sm text-gray-400">
// //           Weather Description
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WeatherCard;
// import PropTypes from "prop-types";
// // import WeatherContainer from "./WeatherContainer";

// const WeatherCard = ({ imageSrc, city }) => {
//   return (
//     <div className="cardContainer relative flex items-center justify-center">
//       <div className="card w-40 h-50 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-10  border border-gray-300 cursor-pointer backdrop-filter backdrop-blur-md">
//         <img src={imageSrc} alt="wait" className="w-20 h-20" />
//         <div className="city font-medium text-white text-base leading-tight">
//           {city}
//         </div>
//         {/* <div className="weather font-medium text-sm text-gray-400">
//             Weather Description
//           </div> */}
//       </div>
//     </div>
//   );
// };

// WeatherCard.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
// };

// export default WeatherCard;
