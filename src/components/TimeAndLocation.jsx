import React from "react";

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-sm sm:text-lg md:text-xl font-extralight">
          {formattedLocalTime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-xl sm:text-2xl md:text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </>
  );
};

export default TimeAndLocation;
