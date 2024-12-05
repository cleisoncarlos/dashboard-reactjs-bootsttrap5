import React, {useEffect, useState} from 'react'

export default function Navbar() {

    const [darkMode, setDarkMode] = useState(false); 
    useEffect(() => { 
        // Atualiza a classe do body 
     //   document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark'; 
        // Adiciona ou remove o atributo data-bs-theme 
        if (darkMode) { 
            document.body.setAttribute('data-bs-theme', 'dark'); 
        } else { 
            document.body.removeAttribute('data-bs-theme'); 
        } }, [darkMode]);

const toggleTheme = () => { setDarkMode(!darkMode);

}
    

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
   
    <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
   
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
  
    <span className="d-none d-md-inline-block  ms-auto me-0 me-md-3 my-2 my-md-0">

    </span>
       
   
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">

<li className='class-item'>
    <button className="nav-link "  onClick={toggleTheme}>
    {darkMode ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
    </button>
</li>


        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">Settings</a></li>
                <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">Logout</a></li>
            </ul>
        </li>
    </ul>
</nav>
  )
}
