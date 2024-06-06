"use client";

import React, { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

// Component
import LoginDesktop from "./components/logingDesktop";
import LoginMobile from "./components/logingMobile";

const Login = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <BrowserView>
            <LoginDesktop />
          </BrowserView>
          <MobileView>
            <LoginMobile />
          </MobileView>
        </>
      )}
    </>
  );
};

export default Login;
