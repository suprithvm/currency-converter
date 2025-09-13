import useCurrencyInfo from "../hooks/useCurrencyInfo";

function InputBoxes({
    label, 
    currency, 
    setCurrency,
    currencyOptions = [],
    amount,
    onAmountChange,

}) {
    

    return (
        <div className="flex items-center bg-white rounded-2xl  shadow-2xl p-3 ">
            
           <div className="flex flex-col w-2/3">
             <label className="text-gray-600 mb-1"> {label} </label>
            <input
                type="number"
                placeholder="0"
                className="p-2 border border-gray-300 rounded-lg"
                value={amount}
                onChange={(e) =>  onAmountChange(e.target.value)}
            >
            </input>
           </div>
           <div className="flex flex-col w-1/3 ml-2">
             <label className="text-gray-600 mb-1">Currency Type</label>
             
             <select 
             className="p-2 border border-gray-300 rounded-lg bg-gray-300"
             value={currency}
             onChange={(e)=> setCurrency(e.target.value)}>
                {/* <option value={"inr"}>inr</option>
                <option value={"usd"}>usd</option> */}

                {currencyOptions.map( (currency) => (
                    <option key={currency} value={currency} >
                        {currency}
                    </option>
                ))}
             </select>
           </div>
        </div>
    )
}


export default InputBoxes;