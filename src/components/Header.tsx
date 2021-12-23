import React from "react";

const Header: React.FC<{}> = (props) => {
  return (
    <div className="bg-brand-color mx-auto">
      <div className="container mx-auto h-11 flex items-center justify-between text-orange-300 font-semibold">
        Trendify Shop
      </div>
    </div>
  );
};
export default Header;
