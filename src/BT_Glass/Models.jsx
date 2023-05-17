import React, { useState } from "react"
import styles from "./models.module.css"

function Models() {
  const glassInfo = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/glassesImage/v1.png",
      img: "/glassesImage/g1.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/glassesImage/v2.png",
      img: "/glassesImage/g2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/glassesImage/v3.png",
      img: "/glassesImage/g3.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "/glassesImage/v4.png",
      img: "/glassesImage/g4.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "/glassesImage/v5.png",
      img: "/glassesImage/g5.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "/glassesImage/v6.png",
      img: "/glassesImage/g6.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "/glassesImage/v7.png",
      img: "/glassesImage/g7.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "/glassesImage/v8.png",
      img: "/glassesImage/g8.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "/glassesImage/v9.png",
      img: "/glassesImage/g9.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ]

  const [glassState, setState] = useState(glassInfo)

  return (
    <div className={styles.container}>
      <div className={styles.models}>
        <div className={(styles.test_model, styles.model)}>
          <img
            src="/glassesImage/model.jpg"
            alt=""
            className={styles.img_model}
          />
          <div className={styles.glass_model}>
            <img src={glassState.find((glass) => glass.id === 1).url} alt="" />
          </div>
          <div className={styles.glass_info}>
            <h1 className={styles.title}></h1>
            <p className={styles.content}></p>
          </div>
        </div>

        <div className={(styles.ori_model, styles.model)}>
          <img
            src="/glassesImage/model.jpg"
            alt=""
            className={styles.img_model}
          />
        </div>
      </div>
      <div className={styles.glass_list}>
        {glassInfo.map((glass) => (
          <div key={glass.id} className={styles.glass}>
            <img
              onClick={() =>
                setState(
                  glassState.find((glass) => glass.id === glassInfo.id).url
                )
              }
              src={glass.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Models
