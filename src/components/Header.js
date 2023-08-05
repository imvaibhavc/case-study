import React from "react";

const Header = () => {
  const headerStyle = {
    background: "#423497",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const logoStyle = {
    width: "100px",
    height: "80px",
    // Add your logo image URL here or use an <img> tag
    // Example: backgroundImage: `url('your-logo.png')`,
    backgroundSize: "cover",
  };

  return (
    <div style={headerStyle}>
      <div style={logoStyle}></div>
    </div>
  );
};

export default Header;
