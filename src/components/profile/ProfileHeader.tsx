import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="mb-[60px]">
      <div className="text-[50px] mb-5 max-sm:text-[40px] font-zilla-slab">
        arya tailor
      </div>
      <div className="text-xl leading-normal text-white max-sm:text-lg">
        <span>
          eighteen. a little confused but interested in startups, ai, vc,
          non-profits, and real estate.
        </span>
        <br />
        <span>per aspera ad asta.</span>
        <br />
        <span>arya.s.tailor@gmail.com |</span>
        <a href="#" className="text-inherit underline">
          instagram
        </a>
        <span>|</span>
        <a href="#" className="text-inherit underline">
          linkedin
        </a>
        <span>|</span>
        <a href="#" className="text-inherit underline">
          x
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;
