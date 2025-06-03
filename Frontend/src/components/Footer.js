import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-3 border-top mt-auto bg-black text-gold">
      <small>&copy; {new Date().getFullYear()} FlowTT. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
