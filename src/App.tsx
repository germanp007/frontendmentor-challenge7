import { useState } from "react";
import Button from "./components/Button";
import StarSvg from "./components/StarSvg";
import Text from "./components/Text";
import Thanks from "./components/Thanks";

const rating = [1, 2, 3, 4, 5];

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const handleClick = (index: number) => {
    setActiveIndex(index ? index : 0);
  };
  const toggleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {!active ? (
        <section className="bg-[#1f2630] h-[322px] w-[325px] rounded-[30px]  absolute right-0 left-0 top-0 bottom-0 m-auto p-6 flex flex-col justify-between">
          {activeIndex > 0 ? (
            <div className="flex justify-start gap-[20px] w-[277px]">
              {[...Array(rating[activeIndex])].map((_, index) => (
                <StarSvg key={index} />
              ))}
            </div>
          ) : (
            <StarSvg />
          )}
          <Text />
          <div className="flex justify-between">
            {rating.map((e, i) => {
              return (
                <span
                  key={i}
                  className={` ${
                    activeIndex === i
                      ? "bg-Orange text-White"
                      : "bg-[#262f38] text-MediumGrey"
                  } w-10 h-10 rounded-[50%] grid place-items-center  font-[700] hover:bg-LightGrey hover:text-White cursor-pointer`}
                  onClick={() => handleClick(i)}
                >
                  {e}
                </span>
              );
            })}
          </div>
          <Button toggleClick={toggleClick} />
        </section>
      ) : (
        <Thanks activeIndex={activeIndex} />
      )}
    </>
  );
};

export default App;
