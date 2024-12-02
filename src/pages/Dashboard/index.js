import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import React, { useEffect, useRef } from 'react'; 
import Quill from 'quill'; 
import 'quill/dist/quill.snow.css'; // Importa o CSS do tema



export default function Dashboard() {
   
    const editorRef = useRef(null); 
    const quillRef = useRef(null); 
    // Armazena a instância do Quill 
    useEffect(() => { if (quillRef.current == null) { 
        // Verifica se o Quill já foi inicializado 
        quillRef.current = new Quill(editorRef.current, { 
            theme: 'snow', modules: { 
                toolbar: [ 
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], 
                    [{size: []}], ['bold', 'italic', 'underline', 'strike', 'blockquote'], 
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], 
                    ['link', 'image', 'video'], ['clean'] ] } }); 
                    
                    quillRef.current.on('text-change', () => { 
                        const conteudo = quillRef.current.root.innerHTML; 
                        console.log(conteudo); // Aqui você pode lidar com o estado do conteúdo 
              
                    }); } }, []);


  return (
<>
<Navbar/>
 
<div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar/>              
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Primary Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Warning Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Success Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">Danger Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                  <div className="card-body">

                                  <div ref={editorRef} />                              
                               

                                  </div>    
                                </div>
                            </div>
                    
                        </div>                    
                    </div>
                </main>
<Footer/>
            </div>
        </div>
</>
  )
    }
