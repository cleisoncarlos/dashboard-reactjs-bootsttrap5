import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import axios from 'axios'
import { toast } from 'sonner';

import React, { useState } from 'react'; 



export default function Category() {

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODdkZTljLTM3NDQtNDNhNi1hMzViLTk1NjExMDk2MzY3MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzMzMzE3NTc3LCJleHAiOjE3MzMzMjExNzd9.WiPXmYnYcr4IVR7NpD7XH00WZ-qXKkrtwye-tW9pNUI'


// salva Category ============================================

const [title, setTitle] = useState(''); 


const handleTitleChange = (e) => setTitle(e.target.value); 


// função para salvar o position

const handleSubmit = async (e) => {    
    e.preventDefault(); 

    const dados = { title: title };
    
 //   console.log('Dados enviados:', { dados });
    try {         
        const response = await axios.post('http://localhost:3333/category', JSON.stringify(dados), { 
            headers: { 
               // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            } 
        }
        ); 
        toast.success('Categoria cadastrada com sucesso!');

// Limpar os campos do formulário 
        setTitle('');      
 
//==========================================
          console.log('Cateriria salva com sucesso:', response.data); 
    } catch (error) { 
        toast.error('Erro ao cadastrar categoria!', {
            className: 'alert alert-success',
        });
        console.error('Erro ao salvar a categoria:', error.response.data);  
    
        
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



                              
                                  <button className="btn btn-danger" type="submit">Salvar Categoria</button>                                                
                               
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
