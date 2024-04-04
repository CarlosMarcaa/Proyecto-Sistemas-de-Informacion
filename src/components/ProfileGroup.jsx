import Navbar from './Navbar'
import HeaderSmall from './HeaderSmall'

const ProfileGroup = () => {
    return (
        <>
            <Navbar/>
            <HeaderSmall/>
            <div className="container profile-group">
                <div className="row gx-4 gx-lg-5 my-5">
                    <div className="col-lg-6 img-profile">
                        <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg"
                        alt="..."
                        />
                    </div>
                    <div className="col-lg-6">
                        <span className="ruta-grupo">Categoria / Nombre del grupo</span>
                        <h2 className="font-weight-light">Nombre Agrupacion</h2>
                        <div className="d-flex small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        <p>
                        This is a template that is great for small businesses. It doesn't have too
                        much fancy flare to it, but it makes a great use of the standard Bootstrap
                        core components. Feel free to use this template for any project you want!
                        </p>
                        <a href="#" className="btn btn-profile-group">Ver muro</a>
                    </div>
                    <div className="col-lg-6">
                        <a className="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className="title-collapse">
                                Mision
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </a>
                        <div className="collapse" id="collapseExample">
                            Some placeholder content for the collapse component. This panel is hidden
                            by default but revealed when the user activates the relevant trigger.
                        </div>
                        <a className="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className="title-collapse">
                                Visión
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </a>
                        <div className="collapse" id="collapseExample2">
                            Some placeholder content for the collapse component. This panel is hidden
                            by default but revealed when the user activates the relevant trigger.
                        </div>
                        <a className="" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className="title-collapse">
                                Objetivos
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </a>
                        <div className="collapse" id="collapseExample3">
                            Some placeholder content for the collapse component. This panel is hidden
                            by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>Informacion extra</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Caracteristica</th>
                                <th scope="col">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Categoría</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <td>Facultad</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <td>Año de Creacion</td>
                                    <td>Larry the Bird</td>
                                </tr>
                                <tr>
                                    <td>Responsable</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <td>Ubicacion</td>
                                    <td>Larry the Bird</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="col-lg-6">
                        <h3>Opiniones</h3>
                        <div className="row puntuacion-general">

                        
                            <div className="col-lg-2 puntuacion-total">
                                <h1>5.0</h1>
                            </div>
                            <div className="col-lg-10 puntuacion-estrellas">
                                <div className="d-flex small text-warning">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                <h5>(1 calificacion)</h5>
                            </div>
                        </div>
                        <div className="row top-comentario">
                            <div className="col-lg-6 col-md-6">
                                <div className="d-flex small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 fecha">
                                <span>09 jul. 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Voluptatem, tempore nesciunt beatae molestiae rerum 
                                 dolore omnis dignissimos cupiditate in animi suscipit
                                  sapiente sint ipsam.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 comentar">
                        <h3>Comparte tu opinion</h3>
                        
                        <div className="d-flex small text-warning mb-2">
                            <div cass="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: 100 }}
                                defaultValue={""}
                            />
                            <label htmlFor="floatingTextarea2">Tu opinión</label>
                        </div>
                        <a href="#" className="btn btn-profile-group">Publicar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileGroup