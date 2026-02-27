import React, { useState } from 'react'
import classic from "../ProductInfo/assets/classic.jpeg";
import vanilla from "../ProductInfo/assets/vanilla.jpeg";
import hazelnut from "../ProductInfo/assets/hazelnut.jpeg";
import assorted from "../ProductInfo/assets/assorted.jpeg";

function Flavours() {
  const [selected, setSelected] = useState("classic");

  const flavours = [
    { id: "classic", img: classic, name: "CLASSIC" },
    { id: "vanilla", img: vanilla, name: "VANILLA" },
    { id: "hazelnut", img: hazelnut, name: "HAZELNUT" },
    { id: "assorted", img: assorted, name: "ASSORTED" ,tag:"Best Seller"},
  ];

  return (

    <div className=" flavours">
      {flavours.map((item) => (
        <div
          key={item.id}
          className={`flavour-card ${selected === item.id ? "active" : ""
            }`}
          onClick={() => setSelected(item.id)}
        >
          <img src={item.img} alt={item.name} />
          <p className="flavourNames"><b>{item.name}</b></p>
          {item.tag ? 
            <button className='tag'>BESTSELLER</button>
             : ""}
        </div>
      ))}
    </div>
  )
}

export default Flavours