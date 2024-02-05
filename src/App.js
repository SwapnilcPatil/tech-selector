import React, { useState } from 'react';
import Dropdown from './components/dropdown';
import DisplayArea from './components/techlist';
import ReactLogo from './assets/svg/react-2.svg';
import DockerLogo from './assets/svg/docker-4.svg';
import ZoomLogo from './assets/svg/zoom-app.svg';
import AwsLogo from './assets/svg/aws-2.svg'


const techOptions = [
  { value: 'react', label: 'React', image: ReactLogo },
  { value: 'docker', label: 'Docker', image: DockerLogo },
  { value: 'zoom', label: 'Zoom', image: ZoomLogo },
  { value: 'aws', label: 'Aws', image: AwsLogo },
];

const App = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleTechChange = (selectedOptions) => {
    setSelectedTechnologies(selectedOptions);
  };

  return (
    <div className='h-screen flex justify-between '>
      <DisplayArea selectedTechnologies={selectedTechnologies} maxItems={4}/>
      <Dropdown options={techOptions} onChange={handleTechChange} selectedTechnologies={selectedTechnologies}/> 
    </div>
  );
};

export default App;
