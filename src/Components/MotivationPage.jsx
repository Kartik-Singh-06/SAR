import React from 'react';

const MotivationPage = () => {
  return (
    <div className="h-[100vh] w-full px-4  ">
      <p
        className="md:w-[85%] text-center leading-6 md:leading-10 mx-auto my-[20vh]"
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 2rem)', 
        }}
      >
        Just as a compass points to the True North, we aim to provide clarity and direction for your professional voyage. 
        Let's embark on this colorful and vibrant expedition together, where your values, interests, and personality traits 
        serve as the guiding stars to chart your course.
      </p>
    </div>
  );
};

export default MotivationPage;
