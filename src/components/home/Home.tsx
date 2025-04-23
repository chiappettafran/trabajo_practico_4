export const Home = () => {
    return (
        <div className="container py-5">
            {/* Nombre de la tienda */}
            <h1 className="text-center mb-4 display-4 fw-bold text-uppercase text-danger border-bottom pb-2">
                Kiosquin Rock
            </h1>

            {/* Carousel Bootstrap */}
            <div id="kiosquinCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner rounded shadow">
                    <div className="carousel-item active">
                        <img
                            src="https://elements-resized.envatousercontent.com/elements-video-cover-images/files/e4ee028d-84d3-46f1-91da-afce274caaee/inline_image_preview.jpg?w=1400&cf_fit=cover&q=85&format=auto&s=9b73a8ae2b1b8a284898f86bc2959752dc61884da8eba3a1b2be1c0ffd96f12d" // <-- Inyectá tu imagen acá
                            className="d-block w-100"
                            alt="Imagen 1 de Kiosquin Rock"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.pinimg.com/originals/aa/c9/1c/aac91c336ffd713a3712b8d7f5e3745c.jpg" // <-- Inyectá tu imagen acá
                            className="d-block w-100"
                            alt="Imagen 2 de Kiosquin Rock"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://s2.ppllstatics.com/elcorreo/www/multimedia/201907/22/media/cortadas/alfombra-pvc-discos-vinilos1-kWvC-U80815105344o8D-1248x770@El%20Correo.jpg" // <-- Inyectá tu imagen acá
                            className="d-block w-100"
                            alt="Imagen 3 de Kiosquin Rock"
                        />
                    </div>
                </div>

                {/* Controles del slider */}
                <button className="carousel-control-prev" type="button" data-bs-target="#kiosquinCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#kiosquinCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            {/* Descripción */}
            <p className="text-center fs-5 text-muted">
                En <strong>Kiosquin Rock</strong> vas a encontrar todo lo que necesitás para vivir la música:
                instrumentos, vinilos, equipos de sonido y un ambiente único para los amantes del rock y el arte.
                ¡Te esperamos!
            </p>
        </div>
    );
};