import { useEffect, useState } from "react";
import ImageCripto from "./assets/imagen-criptos.png";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
function App() {
  const [currency, setCurrency] = useState({});
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (Object.keys(currency).length > 0) {
      const checkCriptoValue = async () => {
        setLoading(true);
        setResults({});
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency.criptoCurrency}&tsyms=${currency.normalCurrency}`;
        const res = await fetch(url);
        const results = await res.json();
        setResults(
          results.DISPLAY[currency.criptoCurrency][currency.normalCurrency]
        );
        setLoading(false);
      };
      checkCriptoValue();
    }
  }, [currency]);

  return (
    <div className="container mx-auto text-center my-16">
      <div className="flex flex-col items-center md:flex-row md:justify-around gap-5">
        <div>
          <img
            className="max-w-xs md:max-w-md"
            src={ImageCripto}
            alt="Cripto Images"
          />
        </div>
        <div>
          <h1 className="text-white text-2xl md:text-4xl my-4 font-bold">
            <span className="border-b-4 border-blue-400 pb-.4">
              Check Price Instantly
            </span>
          </h1>
          <Form setCurrency={setCurrency}></Form>
          {loading && (
            <div className="mt-8 flex items-center justify-center">
              <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin" />
            </div>
          )}
          {results.PRICE && <Results results={results}></Results>}
        </div>
      </div>
    </div>
  );
}

export default App;
