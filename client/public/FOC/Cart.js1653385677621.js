import axios from "axios";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [Total, setTotal] = useState(0);
  const [isPaid, setIsPaid] = useState(false);
  const getAllItems = async () => {
    try {
      const response = await axios.get("/getCart");
      const array = response.data.map((item) => {
        return { ...item, qty: 0 };
      });
      setItems(array);
    } catch (error) {
      console.log(error);
    }
  };
  const cartHandle = (e, item) => {
    const { itemName, price, qty, id } = item;
    const newItems = items.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    const newItem = { itemName, price, qty: e.target.value, id };
    let n = [...newItems, newItem];
    setItems(n);
    // console.log();
  };

  const HandleTotal = () => {
    const value = items.reduce((sum, currentItem) => {
      return sum + currentItem.qty * currentItem.price;
    }, 0);
    setTotal(value);
    setIsPaid(true);
  };
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <h3>My Cart</h3>
      <form>
        <table>
          <thead>
            <tr>
              <th>Item:</th>
              <th>Price:</th>
              <th>Quenty:</th>
            </tr>
          </thead>
          {items
            .sort((a, b) => (a.price > b.price ? 1 : -1))
            .map((item) => {
              const { itemName, price, qty, id } = item;
              return (
                <tr>
                  <td>{itemName}</td>
                  <td>{price}</td>
                  <input
                    type="text"
                    value={qty}
                    onChange={(e) => cartHandle(e, item)}
                  />
                </tr>
              );
            })}
        </table>
        <button type="button" onClick={HandleTotal}>
          purchase
        </button>
      </form>
      {isPaid
        ? `
        Paid Successful
        Total Bill: ${Total}
        `
        : ``}
    </div>
  );
};

export default Cart;
