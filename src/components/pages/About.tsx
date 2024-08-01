import React, { useState } from 'react';
import Button from '../utilities/Button';

interface Props {
  message?: string;
}

const About: React.FC<Props> = ({ message = 'HOME->ABOUT' }) => {
  const [aboutMessage, setAboutMessage] = useState<string>('');

  const handleClick = () => {
    console.log(message + ' -> Button clicked!');
    setAboutMessage('This application example is written in React ts as the UI tier with a graphql server as the middle tier.');
  };

  return (
    <div>
      <h1>{message}</h1>
      <div>
        <Button onClick={handleClick}>Click me</Button>
        {aboutMessage && <p className="mt-4">{aboutMessage}</p>}
      </div>
    </div>
  );
};

export default About;
