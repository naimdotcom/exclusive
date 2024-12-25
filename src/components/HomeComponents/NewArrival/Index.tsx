import ItemsTitleAndSubTitle from "../../CommonComponents/ItemsTitleAndSubTitle";
import {
  perfume,
  playStation,
  speakers,
  WomenCollection,
} from "../../../utils/assets";
import NewArrivalTitleAndDescription from "../../CommonComponents/NewArrivalTitleAndDescription";

function NewArrival() {
  return (
    <div className="mt-36">
      <div>
        <ItemsTitleAndSubTitle title="New Arrival" description="Freatures" />
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-8 ">
          {/* ======== playstation =========== */}
          <div className="relative ">
            <div className="flex items-end justify-center h-full bg-black/95">
              <picture>
                <img src={playStation} alt={playStation} />
              </picture>
            </div>
            <div className="absolute bottom-8 left-8">
              <NewArrivalTitleAndDescription
                title="PlayStation 5"
                descrition="The latest and greatest console from Sony."
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-8">
            {/* ======== women =========== */}
            <div className="relative">
              <div className="flex items-end justify-center bg-black/95">
                <picture>
                  <img src={WomenCollection} alt={playStation} />
                </picture>
              </div>
              <div className="absolute bottom-8 left-8">
                <NewArrivalTitleAndDescription
                  title="Women’s Collections"
                  descrition="Featured woman collections that give you another vibe."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {/* ======== speaker =========== */}
              <div className="relative">
                <div className="flex items-center justify-center h-full bg-black/95">
                  <picture>
                    <img src={speakers} alt={playStation} />
                  </picture>
                </div>
                <div className="absolute bottom-8 left-8">
                  <NewArrivalTitleAndDescription
                    title="Speakers"
                    descrition="Amazon wireless speakers"
                  />
                </div>
              </div>
              {/* ======== perfume =========== */}
              <div className="relative ">
                <div className="flex items-center justify-center h-full py-10 bg-black/95">
                  <picture>
                    <img src={perfume} alt={playStation} />
                  </picture>
                </div>
                <div className="absolute bottom-8 left-8">
                  <NewArrivalTitleAndDescription
                    title="Perfume"
                    descrition="GUCCI INTENSE OUD EDP"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
