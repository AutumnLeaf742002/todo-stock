import { useState } from "react";

export const CheckBoxLabel = ({ label }) => {

    const [checked, setChecked] = useState(false);
    return (
        <div className="flex items-center gap-1">
            <input 
                onClick={() => setChecked(!checked)}
                checked={checked}
                type="checkbox"
                className="w-4 h-4"
            />
            <label 
                className="text-gray-700 select-none"
                onClick={() => setChecked(!checked)}
            >
                {label}
            </label>
        </div>
    )
}