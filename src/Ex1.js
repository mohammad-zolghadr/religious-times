import React, { useEffect, useState } from "react";
import axios from "axios";

import style from "./Ex1.module.css";

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

const Ex1 = () => {
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
    <div className={style.Ex1Container}>
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
      {dataFetched && !isLoading && (
        <div className={style.resultContainer}>
          <p>اسم شهر : {dataFetched.CityName}</p>
          <p>تاریخ امروز(شمسی) : {dataFetched.Today}</p>
          <p>تاریخ امروز(قمری) : {dataFetched.TodayQamari}</p>
          <p>اذان صبح : {dataFetched.Imsaak}</p>
          <p>طلوع آفتاب : {dataFetched.Sunrise}</p>
          <p>اذان ظهر : {dataFetched.Noon}</p>
          <p>غروب آفتاب : {dataFetched.Sunset}</p>
          <p>اذان مغرب : {dataFetched.Maghreb}</p>
          <p>نیمه شب شرعی : {dataFetched.Midnight}</p>
        </div>
      )}
    </div>
  );
};

export default Ex1;
