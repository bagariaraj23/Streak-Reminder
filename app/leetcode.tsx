import { useState, useEffect } from "react";
import Check_lt from "./check_lt";
import { lt } from "./types";

export default function Leetcode() {
  const [data, setData] = useState<lt | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/rahul_o15")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h2 className="text-xl md:text-4xl h-1/6 w-3/4 bg-white bg-opacity-25 flex items-center justify-center rounded-md font-mono">
        Leetcode
      </h2>
      <div className="h-5/6">
        {!isLoading ? (
          <>
            <div className="flex gap-5 justify-center w-full p-3">
              <div>ID :</div>
              <div>rahul_o15</div>
            </div>
            <div className="flex gap-5 justify-center w-full p-3">
              <div>Total-Solved :</div>
              <div>{data?.totalSolved.toString()}</div>
            </div>
            <div className="flex gap-5 justify-center w-full p-3">
              <div>Easy-Solved :</div>
              <div>{data?.easySolved.toString()}</div>
            </div>
            <div className="flex gap-5 justify-center w-full p-3">
              <div>Medium-Solved :</div>
              <div>{data?.mediumSolved.toString()}</div>
            </div>
            <div className="flex gap-5 justify-center w-full p-3">
              <div>Hard-Solved :</div>
              <div>{data?.hardSolved.toString()}</div>
            </div>
            <Check_lt />
          </>
        ) : (
          <div className="flex items-center justify-center p-5">Loading..</div>
        )}
      </div>
    </div>
  );
}
