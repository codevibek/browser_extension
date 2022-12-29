import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Select all input elements on the page
    const inputElements = document.querySelectorAll('input');

    // Loop through the text elements and log their content
    inputElements.forEach((input) => {
      // Create a new button element
      const button = document.createElement('button');
      button.textContent = 'Click me';

      // Add an onclick event listener to the button
      button.addEventListener('click', () => {
        console.log(`${input.value}`);
      });

      // Append the button to the input element
      input.insertAdjacentElement('afterend', button);
    });
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
