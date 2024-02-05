import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, onChange, selectedTechnologies }) => {
    const isNextButtonDisabled = selectedTechnologies.length === 0;

    const handleNextButtonClick = () => {
        if (!isNextButtonDisabled) {
          alert(`Number of technologies added: ${selectedTechnologies.length}`);
        }
      };
    return (
        <div className='flex justify-center items-center '>
            <div className='w-6/12'>
                <button disabled className='p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold'>1 of 3</button>
                <p className='p-2 text-3xl font-bold'> Let's add your internal tools</p>
                <p className='p-2 text-lg'>Search to quickly add products your team uses today.You'll be able to add as many as you need later but for now let's add four.</p>
                <Select
                    options={options}
                    isSearchable
                    isMulti
                    onChange={onChange}
                    placeholder="Search for Technologies..."
                    className='p-2'
                />
                <div className='p-2'>
                    <button
                        disabled={isNextButtonDisabled}
                        onClick={handleNextButtonClick}
                        className={`p-2 rounded-lg w-full ${isNextButtonDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
