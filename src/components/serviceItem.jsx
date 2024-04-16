import PropTypes from "prop-types";
import Button from "./UI/buttons";

const ServiceItem = ({ item }) => {
  return (
    <article className="w-full h-[344px] rounded-md overflow-hidden relative service-item">
      <div className="w-full h-full flex flex-col font-roboto relative service-front">
        {item.isPopular && (
          <p className="w-[78px] h-6 py-1 px-2 bg-orange text-xs font-medium rounded-tl-[6px] rounded-br-[6px] absolute top-0 left-0 z-30">
            Популярне
          </p>
        )}

        <img
          src={item.image}
          alt={`зображення, що описує послугу ${item.title}`}
          className="w-full h-[240px]"
        />

        <div className="w-full h-[103px] bg-blue px-2 flex relative">
          <div className="w-[70%] h-full">
            <p className="text-bold-24">{item.title}</p>
            <p className="text-base font-medium">{item.text}</p>
          </div>

          <div className="w-[30%] h-full bg-orange flex flex-col items-center justify-center absolute top-0 right-0 price">
            <p>від</p>
            <p>{item.price} грн.</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[346px] flex flex-col font-roboto absolute top-0 service-back z-[5]">
        <div className="w-full h-[243px] bg-blue bg-opacity-90 flex flex-col justify-center px-4">
          <p className="w-[70%] text-bold-24">{item.title}</p>
          <p className="w-[70%] text-base font-medium">{item.text}</p>
        </div>

        <Button style={"orange"} btnClass={"w-full h-[103px]"}>
          Замовити
        </Button>
      </div>
    </article>
  );
};

ServiceItem.propTypes = {
  item: PropTypes.shape({
    isPopular: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ServiceItem;
