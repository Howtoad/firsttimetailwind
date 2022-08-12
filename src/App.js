import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        <article>
          <h1 className="text-lg md:text-xl lg:text-2xl text-red-700">
            Article 1 overskrift
          </h1>
          <img src="https://picsum.photos/200" alt="Article 1" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </article>
        <article>
          <h1 className="text-lg md:text-xl lg:text-2xl text-red-700">
            Article 2 overskrift
          </h1>
          <img src="https://picsum.photos/200" alt="Article 1" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </article>
        <article>
          <h1 className="text-lg md:text-xl lg:text-2xl text-red-700">
            Article 3 overskrift
          </h1>
          <img src="https://picsum.photos/200" alt="Article 1" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
