import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import axios from 'axios'

import React, { useEffect, useRef, useState } from 'react'; 
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

                    [{ 'header': '1'}, {'header': '2'}, {'header': '3'}, { 'font': [] }], 
                    [{size: []}], 
                    ['bold', 'italic', 'underline', 'blockquote'], 
                    [{ 'align': [] }],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], 
                    ['link', 'image'], 
                    [{ 'color': [] }], 
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    // ´['clean']                    
                ],
                // handlers: { 
                //     image: imageHandler
                // } 
            } 
        });
    }
        }, []);



        const [options, setOptions] = useState([]);

         useEffect(() => { 
       
            axios.get('http://localhost:3333/category', {
                 headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODdkZTljLTM3NDQtNDNhNi1hMzViLTk1NjExMDk2MzY3MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzMzMjUwNTgwLCJleHAiOjE3MzMyNTQxODB9.Qrmc4gkSO69FjNvG-sQd5_Vo0KOdGmMTd6kaUGu1QC4` }
             }
        )
            .then(response => { 
            // Armazena os dados no estado 
                setOptions(response.data);
         //   console.log(response.data)
            
            }) 
                .catch(error => { 
                    console.error('Erro ao buscar os dados:', error); 

                }); 

               
            }, []); 
          
         
            

// salva post ============================================

const getConteudo = () => { 
    if (quillRef.current) { 
        const conteudo = quillRef.current.root.innerHTML; 
        return conteudo; 
    } return '';
 };

const [title, setTitle] = useState(''); 
const [categoryId, setCategoryId] = useState('');

const handleTitleChange = (e) => setTitle(e.target.value); 
const handleCategoryChange = (e) => setCategoryId(e.target.value);

// função para salvar o position

const handleSubmit = async (e) => {    
    e.preventDefault(); 

    const content = getConteudo()
    
    
    const formData = new FormData(); 
    formData.append('title', title); 
    formData.append('content', content); 
    formData.append('categoryId', categoryId);
    
   // console.log('Dados enviados:', { title, content, categoryId });
    try { 
        
        const response = await axios.post('http://localhost:3333/post', formData, { 
            headers: { 
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODdkZTljLTM3NDQtNDNhNi1hMzViLTk1NjExMDk2MzY3MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzMzMjUzMDI1LCJleHAiOjE3MzMyNTY2MjV9.Z4f7_9hhkkxehuP_u5CBsoG_T5p6fH6ka2cZRLLJ1Ng`
            } 
        }
        ); 
        console.log('Post salvo com sucesso:', response.data); 
    } catch (error) { 
        console.error('Erro ao salvar o post:', error.response.data);  
        
    } };


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


                           <form  onSubmit={handleSubmit}>

                                  <div className="mb-3">
  <label  className="form-label">Titulo</label>
  <input type="text" className="form-control" value={title} onChange={handleTitleChange}/>
</div>

<div className="row mb-3">
    <div className="col-lg-6">

    <label  className="form-label">Categoria</label>

    <select className="form-select" value={categoryId} onChange={handleCategoryChange}>
    {options.map((item) => ( 
        <option 
            key={item.id} 
            value={item.id}> 
            {item.title} 
        </option>
     ))}
</select>
   
    </div>


    <div className="col-lg-6">

    <label  className="form-label">Data</label>
    <input type="date" className="form-control" id="" placeholder=""/>


        </div>
    
    </div>    





                                  <div ref={editorRef} />   


                               
                               

                                  <button className="btn btn-danger" type="submit">Salvar Post</button>                                                
                               
</form>
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
