import { useEffect, useState } from "react";

function App() {
  const [currency, setCurreny] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ddd5616b113c470ea3d83a92860cae68&symbols=CAD,EUR,IDR,JPY,CHF,GBP"
    )
      .then((response) => response.json())
      .then((result) => {
        const mappedRates = Object.entries(result.rates).map(
          ([key, value]) => ({
            name: key,
            value: value,
          })
        );
        setCurreny(mappedRates);
      });
  }, []);

  return (
    <div className="flex justify-center bg-orange-500 h-screen flex-col">
      <div className="self-center">
        <table className="text-white">
          <thead className="text-2xl">
            <tr>
              <th className="px-3">Currency</th>
              <th className="px-3">We Buy</th>
              <th className="px-3">Exchange Rate</th>
              <th className="px-3">We Sell</th>
            </tr>
          </thead>
          <tbody className="text-center text-xl">
            {currency.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{`${item.value + (5 * item.value) / 100}`}</td>
                <td>{item.value}</td>
                <td>{`${item.value - (5 * item.value) / 100}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="self-center  text-center text-white mt-5 text-sm">
        <p>Rates are based from 1 USD.</p>
        <p>
          This application uses API from{" "}
          <a href="https://currencyfreaks.com">https://currencyfreaks.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
