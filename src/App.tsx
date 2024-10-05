import './App.css'

function App() {
  const pages = [
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
  ];

  const pagesUI = pages.map((page, idx) => {
    return <li key={`${page}-${idx}`}>{page}</li>;
  });

  return (
    <>
      <div className='gd-dashboard-container'>
        <div className="wrapper gd-menu-container">
          <h3>Gallery Dashboard</h3>
          <div className='gd-pages-wrapper'>
            <ul className='gd-pages'>
              {pagesUI}
            </ul>
          </div>
          <div className='gd-back-wrapper'>
            <div>Back</div>
          </div>
        </div>
        <div className='wrapper gd-content-container'>
          <p>Gallery content</p>
        </div>
      </div>
    </>
  )
}

export default App
