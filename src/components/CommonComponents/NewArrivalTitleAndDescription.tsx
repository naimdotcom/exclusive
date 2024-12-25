function NewArrivalTitleAndDescription({
  title,
  descrition,
  btnText = "Shop Now",
}: {
  title: string;
  descrition: string;
  btnText?: string;
}) {
  return (
    <div>
      <div className="inline-flex flex-col items-start justify-start h-32 gap-4">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-[#f9f9f9] text-2xl font-semibold font-inter leading-normal tracking-wide">
            {title}
          </h1>
          <p className="w-60 text-[#f9f9f9] text-sm font-normal font-poppins leading-tight">
            {descrition}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <button className="text-base font-medium leading-normal text-white underline underline-offset-4 font-poppins">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalTitleAndDescription;
