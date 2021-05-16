import React, {useState} from 'react';

export function ImageSearch({ onSearch }) {
    const [search, setSearch] = useState('');

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto" >
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
                    <input 
                        type="text" 
                        name="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                        placeholder="Search image term..."
                    />
                    <button 
                        type="submit"
                        className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )

    function onSubmit(e) {
        e.preventDefault()
        onSearch(search);
    }
}