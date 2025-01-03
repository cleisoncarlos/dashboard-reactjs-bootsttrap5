import React from 'react'

export default function Sidebar() {
  return (
   
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="sb-sidenav-menu-heading">POSTS</div>
            <a className="nav-link" href="/">
                <div className="sb-nav-link-icon"><i className="fa-regular fa-newspaper"></i></div>
                Inserir Post
            </a>
            <a className="nav-link" href="/">
                <div className="sb-nav-link-icon"><i className="fa-solid fa-list"></i></div>
                Listar Posts
            </a>
            <div className="sb-sidenav-menu-heading">CATEGORIAS</div>
            <a className="nav-link" href="/">
                <div className="sb-nav-link-icon"><i className="fa-solid fa-tags"></i></div>
                Inserir Categoria
            </a>
            <a className="nav-link" href="/">
                <div className="sb-nav-link-icon"><i className="fa-solid fa-list"></i></div>
                Listar Categorias
            </a>
            <div className="sb-sidenav-menu-heading">USUÁRIOS</div>
            <a className="nav-link" href="/">
                <div className="sb-nav-link-icon"><i className="fas fa-user-alt"></i></div>
                Inserir Usuário
            </a>
            <a className="nav-link" href="/">
                <div className="sb-nav-link-icon"><i className="fa-solid fa-list"></i></div>
                Listar Usuários
            </a>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                Layouts
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                </nav>
            </div>
   
     
        </div>
    </div>
    <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
    </div>
</nav>
  )
}
