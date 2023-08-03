import '../css/modal.css'

export default function ModalContent({ onClose } : {onClose:any}) {
    return (
      <div className="modal">
        <h1>Hi</h1>
        <button onClick={onClose}>Close</button>
      </div>
    );
}
  