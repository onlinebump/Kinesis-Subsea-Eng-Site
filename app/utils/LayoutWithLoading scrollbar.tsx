"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/app/utils/context/LoadingContext";
import LoadingScreen from "@/app/utils/LoadingScreen";
import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";
const ScrollableContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

const LayoutWithLoading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, setLoading } = useLoading();
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    // Use a shorter loading time for better perceived performance
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Navbar scrollY={scrollY} />
      {/* <SmoothScrollbarProvider onScroll={setScrollY}> */}
      <main style={{ position: "relative", minHeight: "100vh" }}>
        {children}
      </main>
      {/* </SmoothScrollbarProvider> */}
    </>
  );
};

export default LayoutWithLoading;
