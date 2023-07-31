import containers from 'containers';
import get from 'lodash/get';

const stores = [...containers];

export default stores;

export function getStore(containerName) {
    return stores.find(store => get(store, 'name', '').toLowerCase() === containerName.toLowerCase());
}
