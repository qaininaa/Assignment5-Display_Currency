const rates = {
    usd: "123.45",
    jpy: "6316.78"
  };
  
  const mappedRates = Object.entries(rates).map(([key, value]) => ({
    name: key,
    value: value // Mengonversi string menjadi number
  }));
  
  console.log(mappedRates);
  