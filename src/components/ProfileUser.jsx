import Navbar from './Navbar'

const ProfileUser = () => {
    return (
        <>
            <Navbar/>
            <div className="container profile-user">
                <div className="row my-5">
                    <div className="col-lg-5">
                        <div className="row top-profile-user">
                            <div className="col-lg-6 imagen-profile">
                                <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://dummyimage.com/200x200/dee2e6/6c757d.jpg" alt="..." />
                            </div>
                            <div className="col-lg-6 texto-profile">
                                <h2>Juan Perez</h2>
                                <h5>Ing. de Sistemas</h5>
                                <a href="#" className="btn btn-profile-user">Editar perfil</a>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="col-lg-7">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Actividad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Juan José publico un nuevo anuncio en el muro del grupo Vox <span>Hace 5 días</span> </td>
                                </tr>
                                <tr>
                                <td>Juan José publico un nuevo anuncio en el muro del grupo Vox <span>Hace 5 días</span> </td>
                                </tr>
                                <tr>
                                <td>Juan José publico un nuevo anuncio en el muro del grupo Vox <span>Hace 5 días</span> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-12 grupos">
                        <h2>Agrupaciones y Selecciones</h2>
                        <a href="#" className="btn btn-profile-user">Unirte a un nuevo grupo</a>
                    </div>
                    <div className="col-md-3 mb-5 grupos-card">
                        <div className="card h-100">
                        <img
                            className="card-img-top"
                            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="fw-bolder titulo-card">Nombre Agrupacion</h5>
                            <h6 className="">Categoria</h6>
                            <div className="d-flex small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            <a href="#" className="btn btn-login">Ver muro</a>
                            <a href="#" className="">Leer sobre el grupo</a>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProfileUser