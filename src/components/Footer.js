import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col items-center pt-8 pb-6 px-4">
      <p className="text-sm">Powered by</p>
      <a href="https://www.themoviedb.org/" className="w-7/12 pt-1 flex flex-row justify-center">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          alt="The Movie Data Base"
        />
      </a>
      <p className="pt-6 text-sm font-semibold">
        Copyright &#169; 2022 Matias Jaliff
      </p>
      <p className="pt-1 text-center text-sm">This is a fully functional three-tier website with a mobile first responsive design.</p>
      <p className="pt-1 text-center text-sm">For further details, please visit:</p>
      <p className="pt-1 text-sm font-semibold">Classic Cinema's GitHub repository</p>
    </div>
  );
};

export default Footer;