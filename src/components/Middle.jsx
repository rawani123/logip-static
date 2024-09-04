import React from "react";
import Graph from "./Graph";
import { FiThumbsUp } from "react-icons/fi";
import { MdResetTv } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { TbDots } from "react-icons/tb";
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineTimer } from "react-icons/md";
import { IoTrendingUpOutline } from "react-icons/io5";

const Middle = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold ">Hello,Margaret</h1>
          <h4>Track team progress here. You almost reach a goal!</h4>
        </div>
        <div></div>
      </div>
      <hr />

      <div className="flex justify-around items-center">
        <div className="flex items-center gap-4 m-3 
         border-r-2 pr-14">
          <div className="flex items-center justify-center w-8 h-8  bg-gray-200 rounded-full ">
            <span className="">
              <FiThumbsUp className="flex " />
            </span>
          </div>
          <div><h1>Finshed</h1> <div className="flex gap-4 items-center">18 <span className="text-green-500 flex items-center text-sm"><TiArrowSortedDown /> +8 hours</span></div> </div>
        </div>
        <div className="flex items-center justify-center gap-4 m-3 border-r-2 pr-14">
          <div className="flex items-center justify-center w-8 h-8  bg-gray-200 rounded-full ">
            <span className="">
            <MdOutlineTimer />
            </span>
          </div>
          <div><h1>Tracked</h1> <div className="flex gap-4 items-center">18 <span className="text-red-500 flex items-center text-sm"><TiArrowSortedUp />-6 hours</span></div> </div>
        </div>
        <div className="flex items-center gap-4 m-3  ">
          <div className="flex items-center justify-center w-8 h-8  bg-gray-200 rounded-full ">
            <span className="">
            <IoTrendingUpOutline />
            </span>
          </div>
          <div><h1>Efficiency</h1> <div className="flex gap-4 items-center">18 <span className="text-green-500 flex items-center text-sm"><TiArrowSortedDown /> 12%</span></div> </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex justify-between gap-2">
          <div>Performance</div>
          <div>
            <select name="" id="">
              <option value="">01-07 May</option>
              <option value="">This month</option>
              <option value="">This year</option>
            </select>
          </div>
        </div>
        <div className="h-72 w-full">
          <Graph />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold m-4">Currenst Task</span>
            Done 30%
          </div>
          <div>
            <select name="" id="" className=" border-2 rounded-xl px-3 py-1">
              <option value="">week</option>
            </select>
          </div>
        </div>
        <div className=" flex flex-col gap-2 mt-2">
          <div className="flex justify-around">
            <div className="flex items-center justify-center w-10 h-10  bg-gray-300 rounded-full ">
              <span className="">
                <MdResetTv className="flex " />
              </span>
            </div>
            <div>Product review for U18 Market</div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-orange-400 h-2 w-2"></div>In
              Progress{" "}
            </div>
            <div className="flex items-center gap-2">
              <CiClock2 />
              4h
            </div>
            <div>
              <TbDots />
            </div>
          </div>
          <div>
            <div className="flex justify-around">
              <div className="flex items-center justify-center w-10 h-10  bg-orange-300  rounded-full ">
                <span className="">
                  <MdResetTv className="flex " />
                </span>
              </div>
              <div>Product review for U18 Market</div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-400 h-2 w-2"></div>In
                Progress{" "}
              </div>
              <div className="flex items-center gap-2">
                <CiClock2 />
                4h
              </div>
              <div>
                <TbDots />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-around">
              <div className="flex items-center justify-center w-10 h-10  bg-gray-100 rounded-full ">
                <span className="">
                  <MdResetTv className="flex " />
                </span>
              </div>
              <div>Product review for U18 Market</div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-400 h-2 w-2"></div>In
                Progress{" "}
              </div>
              <div className="flex items-center gap-2">
                <CiClock2 />
                4h
              </div>
              <div>
                <TbDots />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
