import Navbar from './Navbar'
import HeaderSmall from './HeaderSmall'

const ProfileGroup = () => {
    return (
        <>
            <Navbar/>
            <HeaderSmall/>
            <div className="container">
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-6">
                        <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg"
                        alt="..."
                        />
                    </div>
                    <div className="col-lg-6">
                        <span>Categoria / Nombre del grupo</span>
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
                        <a className="btn btn-primary" href="#!">
                        Call to Action!
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <div className="title-collapse">
                            <a className="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Mision
                                <i className="bi bi-chevron-down"></i>
                            </a>
                        </div>
                        <div className="collapse" id="collapseExample">
                            Some placeholder content for the collapse component. This panel is hidden
                            by default but revealed when the user activates the relevant trigger.
                        </div>
                        <div className="title-collapse">
                            <a className="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Visión
                                <i className="bi bi-chevron-down"></i>
                            </a>
                        </div>
                        <div className="collapse" id="collapseExample2">
                            Some placeholder content for the collapse component. This panel is hidden
                            by default but revealed when the user activates the relevant trigger.
                        </div>
                        <div className="title-collapse">
                            <a className="" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Objetivos
                                <i className="bi bi-chevron-down"></i>
                            </a>
                        </div>
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
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                </tr>
                                <tr>
                                <td>Thornton</td>
                                <td colSpan={2}>Larry the Bird</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="col-lg-6">
                        <h3>Informacion extra</h3>
                        <div className="col-lg-4">
                            <h1>5.0</h1>
                        </div>
                        <div className="col-lg-8">
                            <div className="d-flex small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            <h3>(1 calificacion)</h3>
                        </div>
                        <div>
                            <div className="d-flex small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            <span>09 jul. 2021</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Voluptatem, tempore nesciunt beatae molestiae rerum 
                                 dolore omnis dignissimos cupiditate in animi suscipit
                                  sapiente sint ipsam.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
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
                        <a href="#" className="btn btn-login">Publicar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileGroup