import React from "react";
function Footer() {
  return (
    <footer className="bg-dark fixed-bottom text-center text-lg-mid text-light">
      © {new Date().getFullYear()} Copyright: NewsApp.com
    </footer>
  );
}

export default Footer;
