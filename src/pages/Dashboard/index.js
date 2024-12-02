import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import React, { useEffect, useRef } from 'react'; 
import Quill from 'quill'; 
import 'quill/dist/quill.snow.css'; // Importa o CSS do tema




export default function Dashboard() {
   
    const editorRef = useRef(null); 
    const quillRef = useRef(null); 
    
    useEffect(() => { if (quillRef.current == null) { 
        quillRef.current = new Quill(editorRef.current, { 
            theme: 'snow', 
            modules: { 
                toolbar: [ 

                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], 
                    [{size: []}], 
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'], 
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], 
                    ['link', 'image', 'video'], 
                    ['clean']                    
                ],
                handlers: { 
                    image: imageHandler
                } 
            } 
        });
    }
        }, []);


        // exibe o hrml dentro do editor
        const logConteudo = () => { 
            if (quillRef.current) { 
                const conteudo = quillRef.current.root.innerHTML; 
                console.log(conteudo); 
            } };


          
// salva as imagens do editor
    const imageHandler = () => { 
        const input = document.createElement('input'); 
        input.setAttribute('type', 'file'); 
        input.setAttribute('accept', 'image/*'); 
        input.click(); input.onchange = async () => { 
            const file = input.files[0]; 
            const formData = new FormData(); 


            formData.append('imagem', file); 
            const response = await fetch('/upload', { 
                method: 'POST', 
                body: formData
             }); 
             
             const imageUrl = await response.text(); 
             const range = quillRef.current.getSelection(); 
             quillRef.current.editor.insertEmbed(range.index, 'image', imageUrl); 
            }; 
        }
           
            
        

         
              


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
                            <div className="">

                                <div className="card mb-4">
                                    <div className="card-header">
                                       Lorem Ipsum Dolor
                                    </div>
                                  <div className="card-body">


                                  <div className="mb-3">
  <label  className="form-label">Titulo</label>
  <input type="text" className="form-control" id="" placeholder=""/>
</div>




                                  <div ref={editorRef} />   


                                  <button className="btn btn-secondary" onClick={logConteudo}>Mostrar Conteúdo</button>  

                                  <button className="btn btn-primary" onClick={()=>{}}>Publicar Conteúdo</button>   

                                                                                   
                               

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
