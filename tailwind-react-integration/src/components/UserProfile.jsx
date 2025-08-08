import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg 
                    p-4 sm:p-4 md:p-8 
                    max-w-xs sm:max-w-xs md:max-w-sm 
                    mx-auto">
      
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full 
                   w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
                   object-cover mb-4"
      />

      {/* Heading */}
      <h2 className="font-bold 
                     text-lg sm:text-lg md:text-xl 
                     text-gray-800 mb-2">
        Jane Doe
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 text-center 
                    text-sm sm:text-sm md:text-base">
        Full Stack Developer with a passion for creating interactive applications and
        experiences on the web.
      </p>
    </div>
  );
};

export default UserProfile;
