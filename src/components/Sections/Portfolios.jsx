import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Live Website",
  },
  {
    id: 3,
    name: "Website Ui Design",
  },
  {
    id: 4,
    name: "Mobile Ui Design",
  }
];

const allData = [
  {
    id: 1,
    name: "Landtick",
    category: ["Live Website","Website Ui Design"],
    image: "images/portfolio/landtick.png",
    slug: "landtick",
  },
  {
    id: 2,
    name: "Holyways",
    category: ["Live Website", "Website Ui Design"],
    image: "images/portfolio/holyways.png",
    slug: "holyways",
  },
  {
    id: 3,
    name: "Waysgalery",
    category: ["Live Website", "Website Ui Design"],
    image: "images/portfolio/ways-galery.png",
    slug: "ways-galery",
  },
  {
    id: 4,
    name: "Fitby",
    category: ["Mobile Ui Design"],
    image: "images/portfolio/fitby.png",
    slug: "fitby",
  },
  {
    id: 5,
    name: "Shifby",
    category: ["Mobile Ui Design"],
    image: "images/portfolio/shifby.png",
    slug: "shifby",
  },
  {
    id: 6,
    name: "Xapax",
    category: ["Live Website", "Website ui design"],
    image: "images/portfolio/xapax.png",
    slug: "xapax",
  },
  {
    id: 7,
    name: "Creative Art",
    category: ["creative"],
    image: "images/portfolio/1.jpg",
    slug: "creative-art",
  },
  {
    id: 8,
    name: "Apple USB",
    category: ["creative", "design"],
    image: "images/portfolio/2.jpg",
    slug: "apple-usb",
  },
  {
    id: 9,
    name: "Work Space",
    category: ["branding"],
    image: "images/portfolio/3.jpg",
    slug: "work-space",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
