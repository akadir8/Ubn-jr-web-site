import React from 'react';
import HomePage from './HomePage';

function Page({ activeLink }) {
  if (activeLink === 0) {
    return <HomePage />;
  } else {
    return <div>Başka bir sayfa</div>;
  }
}

export default Page;