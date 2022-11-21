import * as React from "react";
import BasketCard from "./BasketCard";
import { RemoveScroll } from "react-remove-scroll";
import BasicModal from "../../UI/BasicModal";
import BasketModal from "./BasketModal";

const Basket = (props) => {
  const {
    basket,
    mobileView,
    open,
    handleCloseModal,
    setCount,
    count,
    deleteBusketHandler,
  } = props;

  return (
    <>
      {!mobileView && (
        <RemoveScroll className="scroll">
          <div className="md:absolute md:top-14 md:right-6 md:z-10 absolute top-0 right-2 overflow-auto max-h-96">
            {basket.map((basketItem) => (
              <BasketCard
                deleteBusketHandler={deleteBusketHandler}
                count={count}
                setCount={setCount}
                key={basketItem.name}
                basketItem={basketItem}
              />
            ))}
            {basket.length === 0 && <h1>No products found in the basket</h1>}
          </div>
        </RemoveScroll>
      )}
      {mobileView && (
        <BasketModal
          deleteBusketHandler={deleteBusketHandler}
          count={count}
          setCount={setCount}
          handleCloseModal={handleCloseModal}
          open={open}
          basket={basket}
        />
      )}
    </>
  );
};

export default Basket;
