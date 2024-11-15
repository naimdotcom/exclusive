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
    const targetDate = new Date(
      timeToEndOffer ? timeToEndOffer : "2024-12-31T23:59:59"
    ).getTime(); // Set your target date here
    const worker = new Worker(
      new URL("../../CountDownWorker.ts", import.meta.url)
    );

    worker.postMessage({ targetDate });

    worker.onmessage = (e) => {
      const { finished, days, hours, minutes, seconds } = e.data;

      if (finished) {
        worker.terminate();
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    console.log(timeLeft);
    return () => {
      worker.terminate();
    };
  }, []);

  if (timeLeft === null) return <div></div>;

  return (
    <div>
      <div className={cn("flex items-center justify-center gap-4")}>
        {/* // days */}
        <div className="flex flex-col gap-2">
          <h3 className="text-black text-xs font-medium font-['Poppins'] leading-none">
            Days
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft?.days}
          </p>
        </div>
        {/* semiclone */}
        <div className="inline-flex flex-col items-start justify-start h-4 gap-2">
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-black text-xs font-medium font-['Poppins'] leading-none">
            Hours
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft?.hours}
          </p>
        </div>

        {/* semiclone */}
        <div className="inline-flex flex-col items-start justify-start h-4 gap-2">
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-black text-xs font-medium font-['Poppins'] leading-none">
            Minutes
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft?.minutes}
          </p>
        </div>

        {/* semiclone */}
        <div className="inline-flex flex-col items-start justify-start h-4 gap-2">
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
          <div className="w-1 h-1 bg-[#e07575] rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-black text-xs font-medium font-['Poppins'] leading-none">
            Seconds
          </h3>
          <p className="text-3xl font-black tracking-wider text-black font-inter">
            {timeLeft?.seconds}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
