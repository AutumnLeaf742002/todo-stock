import { useState } from 'react';

export const InputLabel = ({ label, type = 'text', required = false }) => {
    
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={label}
                required={required}
            />
            <label
                className={`absolute left-3 transition-all duration-200
                ${isFocused || value ? 'text-xs top-1 text-blue-500' : 'text-base top-3 text-gray-500'}
                peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-500
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500`}
            >
                {label}
            </label>
        </div>
    );
};
