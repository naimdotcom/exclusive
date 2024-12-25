import { useEffect, useState } from "react";
import { exprienceImg } from "../../../utils/assets";
import Button from "../../CommonComponents/Button";

function Exprience({
  timeToEndOffer = "2024-12-31T23:59:59",
}: {
  timeToEndOffer?: string | Date;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const targetDate = new Date(timeToEndOffer).getTime(); // Set your target date here
    const worker = new Worker(
      new URL("../../../CountDownWorker.ts", import.meta.url)
    );

    worker.postMessage({ parsedDate: targetDate });

    worker.onmessage = (e) => {
      const { finished, days, hours, minutes, seconds } = e.data;

      if (finished) {
        worker.terminate();
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    return () => {
      worker.terminate();
    };
  }, []);

  if (timeLeft === null) return <div></div>;

  return (
    <div className="flex items-center justify-between pt-16 pb-16 bg-black px-14 mt-36">
      <div className="w-[40%] h-full flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h3 className="text-base font-semibold leading-tight text-cs-button00FF66 font-poppins">
            Categories
          </h3>
          <h1 className="text-[#f9f9f9] text-5xl font-semibold font-inter leading-10 tracking-widest">
            Enhance Your <br />
            Music Experience
          </h1>
        </div>
        <div>
          <div className="inline-flex items-start justify-start h-16 gap-6">
            <div className="flex items-center justify-center w-16 h-16 text-center bg-white rounded-full">
              <div className="inline-flex flex-col items-center justify-start ">
                <div className="text-base font-semibold leading-tight text-black font-poppins">
                  {timeLeft?.days ? timeLeft?.days : 0}
                </div>
                <div className="w-8 text-xs font-normal leading-none text-black font-poppins">
                  Days
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-16 h-16 text-center bg-white rounded-full">
              <div className="inline-flex flex-col items-center justify-center">
                <div className="text-base font-semibold leading-tight text-black font-poppins">
                  {timeLeft?.hours ? timeLeft?.hours : 0}
                </div>
                <div className="text-xs font-normal leading-none text-black w-11 font-poppins">
                  Hours
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-16 h-16 text-center bg-white rounded-full">
              <div className="inline-flex flex-col items-center justify-start">
                <div className="text-base font-semibold leading-tight text-black font-poppins">
                  {timeLeft?.minutes ? timeLeft?.minutes : 0}
                </div>
                <div className="text-xs font-normal leading-none text-black w-11 font-poppins">
                  Minutes
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-16 h-16 text-center bg-white rounded-full">
              <div className="inline-flex flex-col items-center justify-start ">
                <div className="text-base font-semibold leading-tight text-black font-poppins">
                  {timeLeft?.seconds ? timeLeft?.seconds : 0}
                </div>
                <div className="w-12 text-xs font-normal leading-none text-black font-poppins">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button
            title="Buy Now"
            BgCss="bg-cs-button00FF66"
            textCss="text-[#f9f9f9]"
          />
        </div>
      </div>
      <div className="w-[50%] relative z-10">
        <picture className="">
          <img src={exprienceImg} alt={exprienceImg} />
        </picture>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full -z-10 top-1/2 left-1/2 bg-white/15 blur-2xl h-[500px] w-[500px]"></div>
      </div>
    </div>
  );
}

export default Exprience;
