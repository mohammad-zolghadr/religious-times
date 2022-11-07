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
  return (
    <div>
      <div>
        <p>اسم شهر : {CityName}</p>
        <p>تاریخ امروز(شمسی) : {Today}</p>
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
