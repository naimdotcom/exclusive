import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

function Timer({ timeToEndOffer }: { timeToEndOffer?: string | Date }) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    let targetDate;

    if (!timeToEndOffer) {
      targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth() + 1); // Set to one month later
    } else {
      targetDate = new Date(timeToEndOffer);
    }

    const parsedDate = targetDate.getTime();

    const worker = new Worker(
      new URL("../../CountDownWorker.ts", import.meta.url)
    );

    worker.postMessage({ parsedDate });

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

  // if (timeLeft === null) return <div></div>;

  return (
    <div>
      <div className={cn("flex items-center justify-center gap-4")}>
        {/* // days */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-medium leading-none text-black font-poppins">
            Days
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft && timeLeft?.days < 10
              ? `0${timeLeft?.days}`
              : timeLeft?.days}
          </p>
        </div>
        {/* semiclone */}
        <div className="inline-flex flex-col items-start justify-start h-4 gap-2">
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-medium leading-none text-black font-poppins">
            Hours
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft && timeLeft?.hours < 10
              ? `0${timeLeft?.hours}`
              : timeLeft?.hours}
          </p>
        </div>

        {/* semiclone */}
        <div className="inline-flex flex-col items-start justify-start h-4 gap-2">
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-medium leading-none text-black font-poppins">
            Minutes
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft && timeLeft?.minutes < 10
              ? `0${timeLeft?.minutes}`
              : timeLeft?.minutes}
          </p>
        </div>

        {/* semiclone */}
        <div className="inline-flex flex-col items-start justify-start h-4 gap-2">
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-medium leading-none text-black font-poppins">
            Seconds
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft && timeLeft?.seconds < 10
              ? `0${timeLeft?.seconds}`
              : timeLeft?.seconds}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
