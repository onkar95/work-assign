import React from 'react';

const Tab2 = ({ adviser }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Wealth Adviser Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Client Portfolio Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-700">Client Portfolio</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Total AUM:</span> {adviser.totalAUM}</p>
              <p><span className="font-semibold">Clients:</span> {adviser.clients}</p>
              <div>
                <p className="font-semibold">Portfolios:</p>
                <ul className="list-disc list-inside pl-4 text-sm">
                  {adviser.portfolios.map(port => (
                    <li key={port}>{port}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Performance & Ratings Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-700">Performance & Ratings</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Client Rating:</span> ⭐ {adviser.rating} / 5</p>
              <p><span className="font-semibold">Avg. Return Rate:</span> {adviser.returnRate}</p>
              <p><span className="font-semibold">Risk Profile:</span> {adviser.riskProfile}</p>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default Tab2;