import React from "react";

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
      return result;
    } else return time.replace("AM", "");
  };
  return (
    <div>
      <div>
        <p>اسم شهر : {CityName}</p>
        <p>تاریخ امروز(شمسی) : {hourFormat24(Today)}</p>
        <p>تاریخ امروز(قمری) : {TodayQamari}</p>
        <p>اذان صبح : {Imsaak}</p>
        <p>طلوع آفتاب : {Sunrise}</p>
        <p>اذان ظهر : {Noon}</p>
        <p>غروب آفتاب : {Sunset}</p>
        <p>اذان مغرب : {Maghreb}</p>
        <p>نیمه شب شرعی : {Midnight}</p>
      </div>
    </div>
  );
};

export default ResultComponent;
