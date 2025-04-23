export const Map = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4 display-4">Donde Estamos</h1>
            <div className="ratio ratio-16x9">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8285417697457!2d-68.83964552459674!3d-32.88629567361957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0939f76fcd9f%3A0xa63a94ebd0e7a69d!2s32%C2%B053'10.7%22S%2068%C2%B050'18.1%22W!5e0!3m2!1ses-419!2sar!4v1712757742612!5m2!1ses-419!2sar"
                    width="100%"
                    height="450"
                    style={{border: 0}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}