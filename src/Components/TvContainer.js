// @flow strict
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyTv } from "../redux/tv/actionTv";
import television from '../images/tv.jpeg'

function TvContainer() {
      
    const quantite = useSelector((state) => state.key_tvReducer.quantite);
     const dispatch = useDispatch();
   
        const [nombreTv, setNombreTv] = useState(1);
        
    return (
      <div className="container">
        <hr /> <hr />
        <img
          src={television}
          alt="tele"
          style={{ width: 200, borderRadius: 10 }}
        />
        <p>
          <b> les télévisions </b>
          <br /> <br />
          <span>Stock: {quantite}</span>
          <br /> <br />
          <span>quantité: </span>
          <input
            type="number"
            value={nombreTv}
            onChange={(e) => setNombreTv(e.target.value)}
          />
          <br /> <br />
          <button onClick={() => dispatch(buyTv(nombreTv))}>Acheter 2</button>
        </p>
      </div>
    );
};

export default TvContainer;