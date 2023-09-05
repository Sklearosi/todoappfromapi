import { useState } from "react";

function App() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url(images/bg-mobile-light.jpg)" }}
        className=" h-[200px] w-full absolute bg-cover bg-center -z-10"
      ></div>
      <div className=" w-[327px] flex m-auto justify-between items-center pt-6">
        <h1 className=" text-white text-3xl tracking-[10px] font-[900]">
          TODO
        </h1>
        <img className=" w-5 h-5 -mt-1" src="images/icon-moon.svg" alt="" />
      </div>
      <div className="top-0 bg-white w-[327px] m-auto mt-10 h-12 rounded-xl shadow-shadowForFirst flex justify-left items-center">
        <label
          className=" ml-3 w-5 h-5 rounded-full border border-[background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)]"
          htmlFor="for-task"
        ></label>
        <input className=" hidden" type="checkbox" name="" id="for-task" />
        <input
          className=" h-5 outline-none text-[#9495A5] placeholder:text-[#9495A5] text-[12px] text-left ml-3 font-[400]"
          placeholder="Create a new todo…"
          type="text"
        />
      </div>
      <div className=" bg-white rounded-xl h-auto w-[327px] m-auto mt-5 shadow-shadowForFirst">
        <ul></ul>
        <div className=" h-12 flex w-[287px] m-auto justify-between items-center text-[400] text-[12px] text-[#9495A5]">
          <p>items left</p>
          <p>Clear Completed</p>
        </div>
      </div>
      <div className=" bg-white rounded-xl h-12 w-[327px] m-auto mt-5 shadow-shadowForFirst text-[700] text-[14px] text-[#9495A5] flex justify-center items-center gap-10">
        <p>All</p>
        <p>Acitve</p>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default App;
