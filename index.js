function App() {
  return (
    <>
      <header>
        <h1>ToDos</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
