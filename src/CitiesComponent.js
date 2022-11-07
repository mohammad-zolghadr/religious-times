import React, { useState } from "react";
import axios from "axios";

// Components
import ResultComponent from "./ResultComponent";
import Loading from "./Loading";

import style from "./CitiesComponent.module.css";
import { cityArray } from "./cityArray";

const CitiesComponent = () => {
  const [dataFetched, setDataFetched] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = (index) => {
    setIsLoading(true);
    axios
      .get(`/${index}`)
      .then((res) => {
        setIsLoading(false);
        setDataFetched(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.CitiesComponentContainer}>
      {console.log(cityArray)}
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
      {isLoading && <Loading />}
      {dataFetched && !isLoading && <ResultComponent data={dataFetched} />}
    </div>
  );
};

export default CitiesComponent;
