import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "Innovating ideas, coding dreams, building tomorrow's reality.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content: "Crafting visions, shaping visual landscapes, inspiring.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content: "Strategic messages, captivating visuals, brand storytelling unleashed.",
    icon: "icon-directions",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
