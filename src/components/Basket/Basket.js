import * as React from "react";
import { RemoveScroll } from "react-remove-scroll";

// COMPONENTS
import BasketCard from "./BasketCard";
import BasketModal from "./BasketModal";

const Basket = (props) => {
  const {
    basket,
    mobileView,
    open,
    handleCloseModal,
    deleteBusketHandler,
    closeBusketHandler,
  } = props;

  return (
    <React.Fragment>
      {!mobileView && (
        <RemoveScroll className="scroll">
          <div className="md:absolute md:top-14 md:right-6 md:z-10 absolute top-0 right-2 overflow-auto max-h-96">
            {basket.map((basketItem) => (
              <BasketCard
                closeBusketHandler={closeBusketHandler}
                key={basketItem.name}
                basketItem={basketItem}
                deleteBusketHandler={deleteBusketHandler}
              />
            ))}
            {basket.length === 0 && (
              <h1 className="bg-gray-800 p-6 w-80 mt-2 text-center text-lg rounded-lg">
                No products found in the basket
              </h1>
            )}
          </div>
        </RemoveScroll>
      )}
      {mobileView && (
        <BasketModal
          closeBusketHandler={closeBusketHandler}
          deleteBusketHandler={deleteBusketHandler}
          handleCloseModal={handleCloseModal}
          open={open}
          basket={basket}
        />
      )}
    </React.Fragment>
  );
};

export default Basket;
