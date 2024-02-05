import React from 'react';

const DisplayArea = ({ selectedTechnologies, maxItems }) => {

    const emptyBoxes = Array(maxItems - selectedTechnologies.length)
        .fill(null)
        .map((_, index) => (
            <div className='flex justify-end items-center p-12'>
                <div key={index} className="m-2 p-20 border border-grey shadow-md rounded-md flex items-center justify-center">
                    <div className='p-4 bg-gray-100 rounded-md'>
                        <span className="text-3xl text-gray-500">+</span>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className='flex justify-end items-center ml-40'>
            <div className="grid grid-cols-2">
                {selectedTechnologies.map((tech) => (
                    <div className='flex justify-end items-center p-12'>
                        <div key={tech.value} className="m-2 p-16 border shadow-md border-grey rounded-md">
                            <div className='flex justify-center'>
                                <img src={tech.image} alt={tech.label} className=" h-16 img-class " />
                            </div>
                            <span className="block text-center text-md font-bold p-4">{tech.label}</span>
                        </div>
                    </div>
                ))}
                {emptyBoxes}
            </div>
        </div>
    );
};

export default DisplayArea;
