import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import axios from 'axios'


import  { useEffect, useState } from 'react'; 

export default function ListPosts() {
 

    // const handleChange = async (e) => { 
    //     const newPublished = e.target.checked; 
    //     setPublished(newPublished); 
        
    //     try { 
    //          axios.put(`http://localhost:3000/update/${item.id}`, { 
    //             published: newPublished
    //          }); 
    //          console.log('Status atualizado com sucesso!'); 
    //         } catch (error) { 
    //             console.error('Erro ao atualizar status:', error);
    //          } };

   
    const [posts, setPosts] = useState([]);
            
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODdkZTljLTM3NDQtNDNhNi1hMzViLTk1NjExMDk2MzY3MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzMzMzQwMzM5LCJleHAiOjE3MzMzNDM5Mzl9.0MHJu0Qj06AbliVk-BT7DeVFtQ0Y6LHmee0R2YoQL9Y'
        
        useEffect(() => {        
            axios.get('http://localhost:3333/post', {
                 headers: { 'Authorization': `Bearer ${token}` }
             }
        )
            .then(response => { 
            // Armazena os dados no estado 
                setPosts(response.data);
            console.log(response.data)            
            }) 
                .catch(error => { 
                    console.error('Erro ao carregar as categorias:', error); 
                });                
            }, []);        
         
//  ============================================

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

    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Título</th>
      <th scope="col">Categoria</th>
      <th scope="col">Data</th>
      <th scope="col">Publicado</th>

    </tr>
  </thead>
  <tbody>
            {posts.map((item) => ( 
      <tr key={item.id}>                
    
        <th scope="row">{item.id}</th>
        <td className="w-50">
            <a href="/">
            {item.title}
            </a>
        </td>
        <td className="small"> {item.category.title} </td>
        <td className="small"> {item.createdAt} </td>
        <td> 

        <div className="form-check form-switch">
  <input className="form-check-input" 
  type="checkbox" 
  role="switch" 
  id={item.id}
 
  ></input>

<label className="form-check-label small" htmlFor={item.id}>{item.published ? 'Publicado' : 'Não Publicado'}</label>

</div>

            
            
            
             </td>
       
</tr>
    ))}

 

  </tbody>
</table>

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
