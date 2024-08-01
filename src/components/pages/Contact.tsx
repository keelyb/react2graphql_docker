import React, { useState } from 'react';
import Button from '../utilities/Button';

interface Props {
  message?: string;
}


const Home: React.FC<Props> = ({message = 'HOME->CONTACT'}) => {
  const [Message, setMessage] = useState<string>('');
  const handleClick = () => {
    console.log(message + ' -> Button clicked!');
    setMessage('The contacts details are ....');
  };
  return (
    <div>
      <h1>{message}</h1>
        <div>
        <Button onClick={handleClick}>Click me</Button>
        {Message && <p className="mt-4">{Message}</p>}
        </div>
    </div>
  );
};

export default Home;