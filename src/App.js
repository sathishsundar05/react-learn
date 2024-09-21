import Menu from "./components/ui/Menu";

function App() {
  const headerMenu = [
    {label: 'Shop by category', link: 'https://www.google.com'},
    {label: 'Become a seller', link: 'https://www.yahoo.com'},
    {label: 'Become an affiliate', link: 'https://www.yahoo.com'},
    {label: 'Support', link: 'https://www.yahoo.com'},
    {label: 'About us', link: 'https://www.yahoo.com'}
  ]

  const gettingStartedMenu = [
    {label: 'Release notes', link: 'https://www.google.com'},
    {label: 'Upgrade guide', link: 'https://www.yahoo.com'},
    {label: 'Browser support', link: 'https://www.yahoo.com'},
    {label: 'Dark mode', link: 'https://www.yahoo.com'},
  ]

  return (
    <div className="App p-4">
      <header className="flex justify-between items-center px-40">
        <div>
          <img src="https://seeklogo.com/images/S/shopee-logo-9143622F5F-seeklogo.com.png" width="80"></img>
        </div>

        <div>
          <Menu menuItems={headerMenu} alignment="row"></Menu>
        </div>

        <div>icons</div>
      </header>

      <footer className="flex justify-between items-center px-40">
        <Menu menuItems={gettingStartedMenu} alignment="column"></Menu>
        <Menu menuItems={gettingStartedMenu} alignment="column"></Menu>
        <Menu menuItems={gettingStartedMenu} alignment="column"></Menu>
        <Menu menuItems={gettingStartedMenu} alignment="column"></Menu>
      </footer>
    </div>
  );
}

export default App;
