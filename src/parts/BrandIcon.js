/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from '../elements/Button/index.js';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-theme-blue text-4xl">
        divine
        <span className="text-theme-purple">Dev</span>
      </p>
    </Button>
  );
}
