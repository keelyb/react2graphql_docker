import React, { useState } from 'react';
import Button from '../utilities/Button';
import ServicesPage from './ServicesPage';


interface Props {
  message?: string;
}


const Home: React.FC<Props> = ({message = 'HOME->SERVICES'}) => {
    const [showServicesPage, setShowServicesPage] = useState(false);

    const handleShowServicesPage = () => {
      setShowServicesPage(true);
    };
  return (
    <div>
      <h1>{message}</h1>
        <div>
        <Button onClick={handleShowServicesPage}>Show Authors</Button>
        {showServicesPage && <ServicesPage />}
        </div>
    </div>
  );
};

export default Home;