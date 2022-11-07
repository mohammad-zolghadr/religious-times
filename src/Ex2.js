import React, { useEffect, useState } from "react";

import style from "./Ex2.module.css";

const BASE_URL = "https://dummyjson.com/posts";

const Ex2 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setData(data.posts);
      });
  };

  return (
    <div className={style.postsContainer}>
      {data &&
        data.map((element) => (
          <div key={element.id}>
            <h3>{element.title}</h3>
            <p>{element.body}</p>
            {element.tags.map((el) => (
              <span>#{el}</span>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Ex2;
