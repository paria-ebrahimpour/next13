"use client";
import { NextPage } from "next";
import React from "react";

const Breaking: NextPage = () => {
  return (
    <>
      this is Breaking page
      <br />
      <button
        onClick={() => {
          throw new Error();
        }}
      >
        break
      </button>
    </>
  );
};

export default Breaking;
