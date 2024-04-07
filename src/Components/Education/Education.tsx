import { FC, useEffect, useRef, useState } from "react";
import Wave from "../Waves/Wave";
import "./Education.css";

const Education: FC = () => {
  const timelineRef = useRef<HTMLUListElement>(null);
  const [items, setItems] = useState<HTMLLIElement[]>([]);

  useEffect(() => {
    if (timelineRef.current) {
      setItems(Array.from(timelineRef.current.querySelectorAll("li")));
    }
  }, [timelineRef]);

  const isElementInViewport = (el: HTMLElement): boolean => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const callbackFunc = (): void => {
    items.forEach((item) => {
      if (isElementInViewport(item)) {
        if (!item.classList.contains("in-view")) {
          item.classList.add("in-view");
        }
      } else if (item.classList.contains("in-view")) {
        item.classList.remove("in-view");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", callbackFunc);

    callbackFunc();

    return () => {
      window.removeEventListener("scroll", callbackFunc);
    };
  }, [items]);

  return (
    <div id="education">
      <Wave upperFill="#d8b2e1" LowerFill="#f3c2c6" />
      <h1 className="disney text-center fs-1">Education</h1>
      <section className="timeline" ref={timelineRef}>
        <ul className="mb-0">
          <li>
            <div>
              <time>Jan 2023 – Mar 2024</time>
              <div className="discovery">
                <h1 className="fs-5">
                  12-month Software Engineering programme
                </h1>
                <p>Holberton School, ALX_Africa</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>Sep 2019 – present</time>
              <div className="discovery">
                <h1 className="fs-5 mt-2">
                  Electronics and Communication Department
                </h1>
                <p>Faculty of Engineering, Alexandria University</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Education;
