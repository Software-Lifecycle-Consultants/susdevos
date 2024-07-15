'use client'

const SearchBar = () => {
    return (
      <div className='w-full h-10 border-2 flex gap-2 items-center rounded-md px-4 border-slate-200 mr-2'>
       <i className="ri-search-line text-slate-400"></i>
       <input type="text" placeholder="Search"  />
      </div>
    );
  };
  export default SearchBar;