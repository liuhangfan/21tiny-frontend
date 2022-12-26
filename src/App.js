import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Works from "./components/works";
import Future from "./components/future";
import Footer from "./components/footer";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 h-full">
      <Navbar />
      <Intro />
      <Works/>
      <Future/>
      <Footer />
    </main>
  );
}