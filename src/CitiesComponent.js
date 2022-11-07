import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import ResultComponent from "./ResultComponent";

import style from "./CitiesComponent.module.css";

const BASE_URL = "https://prayer.aviny.com/api/prayertimes";
const cityArray = [
  "",
  //1
  "تهران",
  "اصفهان",
  "ارومیه",
  "اراک",
  //5
  "اهواز",
  "تبریز",
  "بندرعباس",
  "شیراز",
  "کرج",
  // 10
  "قزوین",
  "قم",
  "زاهدان",
  "مشهد",
  "یزد",
  // 15
  "بجنورد",
  "رشت",
  "ساری",
  "گرگان",
  "کرمان",
  // 20
  "بوشهر",
  "کرمانشاه",
  "سنندج",
  "مهاباد",
  "همدان",
  // 25
  "زنجان",
  "اردبیل",
  "سمنان",
  "",
  "ایلام",
  // 30
  "خرم آباد",
  "شهرکرد",
  "یاسوج",
];

const CitiesComponent = () => {
  const [dataFetched, setDataFetched] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = (index) => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${index}`)
      .then((res) => {
        setIsLoading(false);
        setDataFetched(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.CitiesComponentContainer}>
      <h3>برای مشاهده اوقات شرعی، روی یکی از شهر های زیر کلیک کن</h3>
      <div>
        {cityArray.map(
          (element, index) =>
            element && (
              <button key={index} onClick={() => getData(index)}>
                {element}
              </button>
            )
        )}
      </div>
      {isLoading && <h3>در حال بارگذاری</h3>}
      {dataFetched && !isLoading && <ResultComponent data={dataFetched} />}
    </div>
  );
};

export default CitiesComponent;
