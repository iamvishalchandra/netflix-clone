import React, { useEffect, useState } from "react";
import "./PlansScreen_Style/PlansScreen.css";
import db from "../../firebase";

function PlansScreen() {
  const [products, setProducts] = useState();

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("price").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  return (
    <div className="plansScreen">
      {/* {Object.entries(products).map(([productId, productData]) => {
        return <div className="plansScreen__plan"></div>;
      })} */}

      {/* <div className="plansScreen__line"></div> */}

      {/* <div className="plansScreen__details"> */}
      {/* <div className="plansScreen__monthlyPrice">MP</div> */}
      {/* <div className="plansScreen__none"> </div>
        <h5>Monthly price</h5>
        <h5>Video quality</h5>
        <h5>Resolution</h5>
        <h5>Watch on your TV and computer</h5>
        <h5>Screens you can watch on at the same time</h5>
        <h5>Unlimited movies and TV shows</h5>
        <h5>Cancel anytime</h5>
      </div> */}
      {/* <div className="plansScreen__mobile">
        <div className="plansScreen__mobileBox">
          <h5>Mobile</h5>
        </div>
        <div className="plansScreen__price plansScreen__options">₹ 199</div>
        <div className="plansScreen__quality plansScreen__options">Good</div>
        <div className="plansScreen__resolution plansScreen__options">480p</div>
        <div className="plansScreen__onTV plansScreen__options">❌</div>
        <div className="plansScreen__mobTab plansScreen__options">✔️</div>
        <div className="plansScreen__devices plansScreen__options">1</div>
        <div className="plansScreen__unlimited plansScreen__options">✔️</div>
        <div className="plansScreen__cancel plansScreen__options">✔️</div>
      </div>
      <div className="plansScreen__basic">Basic</div>
      <div className="plansScreen__standard">Standard</div>
      <div className="plansScreen__premium">Premium</div> */}

      {/* <table className="plansScreen__table">
        <thead>
          <tr>
            <th className="plansScreen__emptyHead"> </th>
            <th>Mobile</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price</td>
            <td>₹ 199</td>
            <td>Good</td>
            <td>Good</td>
            <td>Good</td>
            <td>Good</td>
            <td>Good</td>
          </tr>
          <tr>
            <td>Monthly price</td>
            <td>Video quality</td>
            <td>Resolution</td>
            <td>Watch on your TV and computer</td>
            <td></td>
          </tr>
          <tr>
            <td>Monthly price</td>
            <td>Video quality</td>
            <td>Resolution</td>
            <td>Watch on your TV and computer</td>
            <td></td>
          </tr>
          <tr>
            <td>Monthly price</td>
            <td>Video quality</td>
            <td>Resolution</td>
            <td>Watch on your TV and computer</td>
            <td></td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default PlansScreen;
