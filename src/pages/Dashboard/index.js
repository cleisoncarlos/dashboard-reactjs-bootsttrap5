import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import axios from 'axios'
import { toast } from 'sonner';

import React, { useEffect, useRef, useState } from 'react'; 
import Quill from 'quill'; 
import 'quill/dist/quill.snow.css'; // Importa o CSS do tema


export default function Dashboard() {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODdkZTljLTM3NDQtNDNhNi1hMzViLTk1NjExMDk2MzY3MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNzMzODM1NTkwLCJleHAiOjE3MzM4MzkxOTB9.UEBjJN4Mp2xBai3DrCzX8JgK79XTD7ptlU41DOVyK2E'; // Substitua pelo seu token

    const editorRef = useRef(null);
    const quillRef = useRef(null);
  
    useEffect(() => {
      if (quillRef.current == null) {
        quillRef.current = new Quill(editorRef.current, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'font': [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'blockquote'],
              [{ 'align': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
             // ['link', 'image'],
             ['link'],
              [{ 'color': [] }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
            ]
          }
        });
      }
    }, []);
  
    const [options, setOptions] = useState([]);
    const [currentDate, setCurrentDate] = useState('');
    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:3333/category', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(response => {
          setOptions(response.data);
        })
        .catch(error => {
          console.error('Erro ao carregar as categorias:', error);
        });
  
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setCurrentDate(formattedDate);
    }, [token]);
  
    const getConteudo = () => {
      if (quillRef.current) {
        return quillRef.current.root.innerHTML;
      }
      return '';
    };
  
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleCategoryChange = (e) => setCategoryId(e.target.value);
    const handleImageChange = (e) => setSelectedFile(e.target.files[0]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const content = getConteudo();
  
      if (!selectedFile) {
        toast.warning('A imagem é obrigatória!');
        return;
      }
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('categoryId', categoryId);
      formData.append('urlImagePost', selectedFile);
  
      try {
        const response = await axios.post('http://localhost:3333/post', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Post cadastrado com sucesso!');
  
        setTitle('');
        setCategoryId('');
        quillRef.current.setContents([]);
        setSelectedFile(null);
  
        console.log('Post salvo com sucesso:', response.data);
      } catch (error) {
        toast.error('Erro ao cadastrar postagem!');
        console.error('Erro ao salvar o post:', error.response.data);
      }
    };

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


                                  <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" value={title} onChange={handleTitleChange} required />
        </div>
        <div className="row mb-3">
          <div className="col-lg-4">
            <label className="form-label">Categoria</label>
            <select className="form-select" value={categoryId} onChange={handleCategoryChange} required>
              <option value="">Selecione uma categoria</option>
              {options.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-4">
            <label className="form-label">Data</label>
            <input
              type="date"
              className="form-control"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Upload de Imagem</label>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
                accept="image/png, image/jpeg, image/jpg"
                required
              />
            </div>
          </div>
        </div>
        <div ref={editorRef} className="mb-3" />
        <button className="btn btn-primary" type="submit">Salvar Post</button>
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
