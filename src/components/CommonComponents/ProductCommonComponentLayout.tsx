import ItemsTitleAndSubTitle from "./ItemsTitleAndSubTitle";
import Timer from "./Timer";

interface Props {
  title?: string;
  description?: string;
  timeToEndOffer?: string | Date;
}

function ProductCommonComponentLayout({
  title,
  description,
  timeToEndOffer,
}: Props) {
  return (
    <div>
      {/* Heading */}
      <div>
        <div className="flex items-end gap-32 ">
          {title && description && (
            <ItemsTitleAndSubTitle title="Flash Sale" description="Today's" />
          )}
          {timeToEndOffer && <Timer timeToEndOffer={timeToEndOffer} />}
        </div>

        {/* Arrows */}
        <div></div>
        {/* Arrows End */}
      </div>
      {/* Heading ENd */}
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductCommonComponentLayout;
