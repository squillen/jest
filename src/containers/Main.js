export default function Main() {
  return (
    <main className="main">
      <header className="main__header">
        <h1>Jest/Enzyme testing app</h1>
        <div className="main__description">
          This is a simple app solely meant to learn/practice Jest and Enzyme. Therefore, the apps
          aren't anything special, but you can still play with them if you want!
        </div>
      </header>
      <ul className="main__links">
        <li className="link">
          <a href="/counter">counter app. of course.</a>
        </li>
        <li className="link">
          <a href="/jotto">word game jotto</a>
        </li>
      </ul>
    </main>
  );
}
