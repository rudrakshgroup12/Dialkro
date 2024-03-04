import React from 'react'
import { useAuth } from "../../ProAuth/AuthPro.jsx";
const BusinessCheck = () => {


    const {
        businessCheck,
        selectBusinessCheck,
        setSelectBusinessCheck,
        error,
      } = useAuth();


  return (
    <div>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <div className="flex flex-col gap-2">
    <div>
        <label className="inline-flex items-center" >
   
          <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" value={selectBusinessCheck}
          onClick={(e) => setSelectBusinessCheck(e.target.value)}/>
            {businessCheck.map((description) => (
          <span className="ml-2" value={description} key={description}>{description}</span>
          ))}
        </label>
    </div>
  
</div>


    </div>
  )
}

export default BusinessCheck
