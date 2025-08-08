import React from "react";

const UserProfile = ({ name, bio, image }) => {
  return (
    <div
      className="max-w-xs md:max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg my-20
                 p-6 sm:p-4 md:p-8 text-center 
                 transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      <img
        src={image}
        alt={name}
        className="w-32 h-32 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto rounded-full object-cover 
                   transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2
        className="mt-4 text-lg md:text-xl font-semibold text-gray-800 
                   transition-colors duration-300 ease-in-out hover:text-blue-500"
      >
        {name}
      </h2>
      <p className="mt-2 text-sm text-gray-600">{bio}</p>
    </div>
  );
};

export default UserProfile;
