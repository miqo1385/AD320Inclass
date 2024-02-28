import logo from './logo.svg';
import './App.css';


function AlertButton({message, children}){
    return <button onClick={() => alert(message)}>{children}</button>;
}

function ToolBar() {
    return (
        <div>
            <AlertButton message="alert message 1">Button 1</AlertButton>
            <AlertButton message="alert message 2">Button 1</AlertButton>
            <AlertButton message="alert message 3">Button 1</AlertButton>
            {/*add more*/}
        </div>

    )
}

function App() {
  return (
      <div className="App">
        <header className="app-header"/>

            <ToolBar />
      </div>
  );
}

export default App;
