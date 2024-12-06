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
            
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODdkZTljLTM3NDQtNDNhNi1hMzViLTk1NjExMDk2MzY3MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzMzNDE3NjEwLCJleHAiOjE3MzM0MjEyMTB9.z__t5Oq1CyeuRNWUY2rlR_CKdCtHkN5OKEhrU4YoBwU'
        
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
      <th scope="col">Editar</th>
      <th scope="col">Excluir</th>

    </tr>
  </thead>
  <tbody>
            {posts.map((item) => ( 
      <tr key={item.id}>                
    
        <th scope="row">{item.id}</th>
        <td>
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
  checked={item.published}
 
  ></input>

{/* <label className="form-check-label small" htmlFor={item.id}>{item.published ? 'Publicado' : 'Não Publicado'}</label> */}

</div>

            
            
            
             </td>


             <td>
           
  <button className="btn  btn-primary btn-sm" type="button">
  <i className="fa-regular fa-pen-to-square"></i>
  </button>



             </td>

             <td>

           <button className="btn  btn-danger btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
           <i className="fa-solid fa-trash-can"></i>
           </button>
         
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


               
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Lorem Ipsum Dolor
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>






<Footer/>
            </div>
        </div>
</>
  )
    }
