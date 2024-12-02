import React from 'react'
import Footer from '../../components/Footer'

export default function Login() {
  return (
 
    <div id="layoutAuthentication">
    <div id="layoutAuthentication_content" className='bg-dark'>
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow border-0 mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                        <label for="inputPassword">Password</label>
                                    </div>
                         
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <a className="small" href="password.html">Esqueci minha senha</a>
                                        <a className="btn btn-primary" href="index.html">Login</a>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><a href="/">Ainda não tenho conta</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <div id="layoutAuthentication_footer">
<Footer/>
    </div>
</div>




  )
}
