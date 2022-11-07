import React from "react";

import style from "./ResultComponent.module.css";

const ResultComponent = (props) => {
  const {
    CityName,
    Today,
    TodayQamari,
    Imsaak,
    Sunrise,
    Noon,
    Sunset,
    Maghreb,
    Midnight,
  } = props.data;

  const hourFormat24 = (time) => {
    let timeSplited = time.split(" - ");
    let result;
    if (timeSplited[1].includes("PM")) {
      const temp = timeSplited[1].replace("PM", "").split(":");
      result = `${timeSplited[0]} - ${+temp[0] + 12}:${temp[1]}`;
    } else {
      if (timeSplited[1].includes("12"))
        result = time.replace("12", "00").replace("AM", "");
      else result = time.replace("AM", "");
    }
    return result;
  };

  return (
    <div className={style.resultContainer}>
      <p>
        اسم شهر : <span>{CityName}</span>
      </p>
      <p>
        تاریخ شمسی : <span>{hourFormat24(Today)}</span>
      </p>
      <p>
        تاریخ قمری : <span>{TodayQamari}</span>
      </p>
      <p>
        اذان صبح : <span>{Imsaak}</span>
      </p>
      <p>
        طلوع آفتاب : <span>{Sunrise}</span>
      </p>
      <p>
        اذان ظهر : <span>{Noon}</span>
      </p>
      <p>
        غروب آفتاب : <span>{Sunset}</span>
      </p>
      <p>
        اذان مغرب : <span>{Maghreb}</span>
      </p>
      <p>
        نیمه شب شرعی : <span>{Midnight}</span>
      </p>
    </div>
  );
};

export default ResultComponent;
