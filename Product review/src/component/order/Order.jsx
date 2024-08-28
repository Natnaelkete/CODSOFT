import { formatCurrency } from "../../Utility/helpers";

function Order() {
  const { info } = JSON.parse(localStorage.getItem("info")) || {
    info: [],
    address: "",
  };

  const { cart } = JSON.parse(localStorage.getItem("cart")) || {
    cart: [],
    colors: [],
  };
  console.log(info);

  return (
    <div>
      <div className="overflow-x-auto">
        {cart.length === 0 || info.length === 0 ? (
          <h1 className="text-xl">No orders yet</h1>
        ) : (
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {info.map((item, index) => (
                <tr key={item.fullname}>
                  <td>{index + 1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.address}</td>
                  <td>
                    {cart[index]?.name}{" "}
                    {/* Assuming name is the product name */}
                  </td>
                  <td>
                    {formatCurrency(cart[index]?.price * cart[index]?.quantity)}{" "}
                    {/* Assuming you want the total cost */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Order;
