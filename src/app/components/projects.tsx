"use client";
import React, { useState } from "react";
import AlertBox from "./alertbox";

const Projects: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const dismissAlert = () => setShowAlert(false);

  return (
    <>
      <h2 className="font-sfmono text-2xl">Work</h2>
      {showAlert && (
        <AlertBox
          message="gh/username"
          buttonText="GitHub"
          buttonLink="#"
          onDismiss={dismissAlert}
        />
      )}
      {showAlert && (
        <AlertBox
          message="re/username"
          buttonText="Replicate"
          buttonLink="#"
          onDismiss={dismissAlert}
        />
      )}
      {showAlert && (
        <AlertBox
          message="li/username"
          buttonText="LinkedIn"
          buttonLink="#"
          onDismiss={dismissAlert}
        />
      )}
      <div className="flex flex-col gap-4">
        <ul className="list-inside"></ul>
      </div>
    </>
  );
};

export default Projects;