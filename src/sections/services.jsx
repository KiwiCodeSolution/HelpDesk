import Button from "../components/UI/buttons";
import ServiceItem from "../components/serviceItem";
import TitleSections from "../components/titleSections";
import items from "../data/services.json";

const Services = () => {
  return (
    <section className="wrapper py-10" id="services">
      <TitleSections styles={"mb-10"}>Наші послуги</TitleSections>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 z-0 mb-10">
        {items.map(item => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </div>
      <Button style={"blue"} btnClass={"mx-auto"}>
        У списку немає моєї проблеми
      </Button>
    </section>
  );
};

export default Services;
