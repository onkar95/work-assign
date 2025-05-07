// import React from 'react';

// const Tab1 = ({adviser}) => {
 

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-800">Wealth Adviser Overview</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
//         <div className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
//           <h3 className="text-lg font-bold mb-2 text-gray-700">Personal Info</h3>
//           <p><span className="font-medium">Name:</span> {adviser.name}</p>
//           <p><span className="font-medium">Email:</span> {adviser.email}</p>
//           <p><span className="font-medium">Phone:</span> {adviser.phone}</p>
//           <p><span className="font-medium">Location:</span> {adviser.location}</p>
//         </div>

       
//         <div className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
//           <h3 className="text-lg font-bold mb-2 text-gray-700">Professional Summary</h3>
//           <p><span className="font-medium">Experience:</span> {adviser.experience}</p>
//           <p><span className="font-medium">Certifications:</span></p>
//           <ul className="list-disc list-inside pl-2 text-sm text-gray-700">
//             {adviser.certifications.map(cert => (
//               <li key={cert}>{cert}</li>
//             ))}
//           </ul>
//           <p className="mt-2"><span className="font-medium">Specializations:</span></p>
//           <ul className="list-disc list-inside pl-2 text-sm text-gray-700">
//             {adviser.specializations.map(spec => (
//               <li key={spec}>{spec}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
//           <h3 className="text-lg font-bold mb-2 text-gray-700">Client Portfolio</h3>
//           <p><span className="font-medium">Total AUM:</span> {adviser.totalAUM}</p>
//           <p><span className="font-medium">Clients:</span> {adviser.clients}</p>
//           <p><span className="font-medium">Portfolios:</span></p>
//           <ul className="list-disc list-inside pl-2 text-sm text-gray-700">
//             {adviser.portfolios.map(port => (
//               <li key={port}>{port}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
//           <h3 className="text-lg font-bold mb-2 text-gray-700">Performance & Ratings</h3>
//           <p><span className="font-medium">Client Rating:</span> ⭐ {adviser.rating} / 5</p>
//           <p><span className="font-medium">Avg. Return Rate:</span> {adviser.returnRate}</p>
//           <p><span className="font-medium">Risk Profile:</span> {adviser.riskProfile}</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Tab1;

import React from 'react';

const Tab1 = ({ adviser }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Wealth Adviser Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Info Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-700">Personal Info</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Name:</span> {adviser.name}</p>
              <p><span className="font-semibold">Email:</span> {adviser.email}</p>
              <p><span className="font-semibold">Phone:</span> {adviser.phone}</p>
              <p><span className="font-semibold">Location:</span> {adviser.location}</p>
            </div>
          </div>
        </div>

        {/* Professional Summary Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-700">Professional Summary</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Experience:</span> {adviser.experience}</p>
              <div>
                <p className="font-semibold">Certifications:</p>
                <ul className="list-disc list-inside pl-4 text-sm">
                  {adviser.certifications.map(cert => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold mt-3">Specializations:</p>
                <ul className="list-disc list-inside pl-4 text-sm">
                  {adviser.specializations.map(spec => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Tab1;