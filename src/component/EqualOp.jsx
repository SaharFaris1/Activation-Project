import React from 'react';

function EqualOp() {
  return (
    <div className=" text-white p-6">
      <div className="flex justify-center space-x-8 font-bold mt-4">
        <p className="underline">Cookie Settings</p>
        <p>Personal Information</p>
      </div>
<hr className="border-blue-500 my-6 " />
      <div className=" px-10 space-y-6 font-semibold text-start">
        <h2 className="text-2xl md:text-xl font-bold">Equal Opportunity Employer</h2>
        <p className="text-lg ">
          Activision is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, gender expression, national origin, protected veteran status, or any other basis protected by applicable law, and will not be discriminated against on the basis of disability.{' '}
          <span className="underline">Equal Employment Opportunity Policy</span>
        </p>

        <p className="text-lg">
          While we strive to provide competitive offers to successful candidates, new hire compensation is negotiable.
        </p>

        <h3 className="text-xl md:text-2xl font-bold">Accommodation Request</h3>
        <p className="text-lg ">
          We are committed to working with and providing reasonable assistance to individuals with physical and mental disabilities. If you are a disabled individual requiring an accommodation to apply for an open position, please email your request to{' '}
          <span className="underline">accommodationrequests@activisionblizzard.com</span>. General employment questions cannot be accepted or processed here. Thank you for your interest.
        </p>

        <p className="text-lg">
          This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. Find out more{' '}
          <span className="underline">here</span>.
        </p>
      </div>
    </div>
  );
}

export default EqualOp;