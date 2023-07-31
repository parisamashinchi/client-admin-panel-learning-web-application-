import { Container } from 'unstated';

export default class ModalContainer extends Container {
    name = 'ModalContainer';
    state = { open: false };
    showModal(children, modalProps) {
        this.setState({ open: true, modalProps, children });
    }
    closeModal() {
        this.setState({ open: false });
    }
}
export const modalStore = new ModalContainer();
