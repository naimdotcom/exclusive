import React from "react";
import ItemsTitleAndSubTitle from "../../CommonComponents/ItemsTitleAndSubTitle";

function NewArrival() {
  return (
    <div>
      <div>
        <ItemsTitleAndSubTitle title="New Arrival" description="Freatures" />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <picture>
              <img src="" alt="" />
            </picture>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
