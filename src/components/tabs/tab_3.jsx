

import React from 'react';

const Tab3 = ({ adviser }) => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Wealth Adviser Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Communication Preferences Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-700">Communication Preferences</h3>
                        <div className="space-y-2 text-gray-600">
                            <p><span className="font-semibold">Preferred Method:</span> {adviser.communicationPreference}</p>
                            <p><span className="font-semibold">Availability:</span> {adviser.availability}</p>
                            <p><span className="font-semibold">Response Time:</span> {adviser.responseTime}</p>
                        </div>
                    </div>
                </div>

                {/* Investment Philosophy Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-700">Investment Philosophy</h3>
                        <p className="text-sm text-gray-600">{adviser.investmentPhilosophy}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Tab3;