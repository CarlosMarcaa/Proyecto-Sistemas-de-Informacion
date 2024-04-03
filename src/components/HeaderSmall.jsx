
const HeaderSmall = () => {
    return (
        <>
            <header className="bg-dark py-5 header-small">
                <div className="container">
                    <div className="text-center text-white">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Búsqueda..." />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                            Buscar
                            </button>
                        </div>
                    </div>

                    </div>
                </div>
            </header>

        </>
    )
}

export default HeaderSmall