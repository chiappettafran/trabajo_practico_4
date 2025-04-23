import { CardInstrumentos} from "./cards/CardInstrumentos";
import { useData} from "../../hooks/useData";
import { Instrumento } from "../../types/instrumentos.types";
import {useState} from "react";
import {ModalInstrumentoDetalle} from "./modals/ModalInstrumentoDetalle";

export const InstrumentosList = () => {
    const { instrumentos, error } = useData();
    const [instrumentoDetalle, setInstrumentoDetalle] = useState<Instrumento | null>(null)
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Instrumentos</h2>
            {error && <p className="text-danger">{error}</p>}
            {instrumentos.map((inst: Instrumento) => (
                <CardInstrumentos
                    key={inst.id}
                    instrumento={inst}
                    handleShow={handleShow}
                    setInstrumentoDetalle={setInstrumentoDetalle}
                />
            ))}
            {showModal && instrumentoDetalle &&
                (
                    <ModalInstrumentoDetalle
                        instrumento={instrumentoDetalle}
                        showModal={showModal}
                        handleClose={handleClose}
                    />
                )
            }
        </div>
    );
};