
function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body {
            margin: 25px;
            color: #333;
            font-family: sans-serif;
            text-align: centre;
          }
          h1 {
            font-weight: 700;
          }
          p {
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }
  
  export default Layout;