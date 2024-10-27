import Modal from 'react-modal';
import css from './ImageModal.module.css';


Modal.setAppElement('#root');

const ImageModal = ({ modalImg, closeModal }) => {
    return <Modal
        isOpen={true}
        className={css.modal}
        overlayClassName={css.overlay}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
        ariaHideApp={false}
    >
        <img className={css["modal-image"]} src={modalImg}></img>
    </Modal>;
};

export default ImageModal;
