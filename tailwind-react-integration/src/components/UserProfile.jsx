import React from "react";

const UserProfile = ({ name, bio, image }) => {
  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 text-center 
                 transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover 
                   transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2
        className="mt-4 text-xl font-semibold text-gray-800 
                   transition-colors duration-300 ease-in-out hover:text-blue-500"
      >
        {name}
      </h2>
      <p className="mt-2 text-gray-600">{bio}</p>
    </div>
  );
};

export default UserProfile;
