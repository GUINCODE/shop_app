import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyPhone } from '../redux/phone/actionPhone';
import telephone from '../images/telephone.jpeg'


// deuxieme methode
const PhoneContainer = (props) => {
   const [nombrePhone, setNombrePhone] = useState(1)
 
    return (
      <div className="container">
        <p>
          <b> les telepones </b>
          <br /> <br />
          <img
            src={telephone}
            alt="tele"
            style={{ width: 200, borderRadius: 10 }}
          />
          <br /> <br />
          <span id="count-phone">Stock: {props.quantite}</span>
          <br /> <br />
          <span>quantité: </span>
          <input
            type="number"
            value={nombrePhone}
            onChange={(e) => setNombrePhone(e.target.value)}
          />
          <button onClick={() => props.buyPhone(nombrePhone)}>Acheter</button>
        </p>
      </div>
    );
};
const mapStateToProps = (state) => {
  return {
    quantite: state.key_phoneReducer .quantite,
  };
};

const mapDispacthToprops = (dispatch) => {
  return {
    buyPhone: (nombrePhone) => dispatch(buyPhone(nombrePhone)),
  };
};
export default connect(mapStateToProps, mapDispacthToprops)(PhoneContainer);










//première méthode

// const PhoneContainer = () => {
// const quantite = useSelector((state) => state.key_phoneReducer.quantite);
// const  dispatch = useDispatch()

//   return (
//     <div className="container">
//       <img
//         src={telephone}
//         alt="tele"
//         style={{ width: 200, borderRadius: 10 }}
//       />

//       <p>
//         <b> les telepones </b>
//         <br /> <br />
//         <span>qauntité: {quantite}</span>
//         <br /> <br />
//         <button onClick={() => dispatch(buyPhone())}>Acheter</button>
//       </p>
//     </div>
//   );
// };


// export default PhoneContainer;



