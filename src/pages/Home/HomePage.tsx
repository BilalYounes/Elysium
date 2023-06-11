import { Header, Gallery, Features, Footer, Home, Realtors, Sidebar, Story, ErrorPage } from "../../components";
import React, { useState } from "react";

const HomePage = () => {
  const [error, setErorr] = useState<string | null>(null);

  return (
    <>
      {error ? (
        <ErrorPage />
      ) : (
        <>
        <div className="container__home">

          <Sidebar />
          <Header />
          <Realtors />
          <Features />
          <Story />
          <Home setErorr={setErorr} />
          <Gallery />
          <Footer />
          </div>

        </>
      )}
      </>
  );
}

export default HomePage;
