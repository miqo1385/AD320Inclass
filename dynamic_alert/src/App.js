import logo from './logo.svg';
import './App.css';

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
};

const Toolbar = () => {
  const buttons = [
    { message: 'Hello BC!', children: 'Button 1' },
    { message: 'Annyeonghaseyo BC!', children: 'Button 2' },
    // Add more button objects as needed
  ];

  return (
      <div>
        {buttons.map((button, index) => (
            <AlertButton key={index} message={button.message}>
              {button.children}
            </AlertButton>
        ))}
      </div>
  );
};

export default Toolbar;


