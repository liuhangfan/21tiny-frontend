import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import MakeUrl from "./components/makeUrl";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 h-screen">
      <Navbar />
      <Intro />
      <MakeUrl />
    </main>
  );
}