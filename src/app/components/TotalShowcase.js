'use client';
import { formatCurrency } from "@/app/helpers";
  
  const TotalShowcase = ({ value }) => {

    

    return (
      <div className="flex justify-end">
        <h3 className="font-bold text-white bg-slate-800 rounded-xl py-3 px-6 text-center text-xs md:text-lg">Total: { formatCurrency(value) }</h3>
      </div>
    )
  }
  
  export default TotalShowcase