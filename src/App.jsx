import Contact from './assets/Contact';
import Hello from './assets/Hello';


function App() {
  const helloData = [
    { name: 'Kittiphop', message: 'Hi there' },
    { name: 'Tom', message: 'Hello..' }
  ];

  return (
    <div>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Kittiphop@gmail.com" phon="0631871262" />
    </div>
  );
}

export default App;
