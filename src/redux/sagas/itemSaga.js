import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        // yield put({ type: 'GET_ITEMS' });
    } catch (error) {
        console.log('error posting item to shelf', error);
    }
}

function* getItems(){
    try{
        const serverResponse = yield axios.get('/api/shelf');
        // console.log('!!!!!!', serverResponse.data);
        
        yield put({ type: "SET_SHELF", payload: serverResponse.data});
    }
    catch(err){
        yield console.log('error in getItems saga', err);
    }
}

function* deleteItems(action) {
    try {
        console.log('in deleteItems',action.payload);
        
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({ type: 'GET_ITEMS'});
    }
    catch (err) {
        yield console.log('error in getItems saga', err);
    }
}
function* itemSaga() {
    yield takeLatest('ADD_TO_SHELF', addItem);
    yield takeEvery ('GET_ITEMS', getItems);
    yield takeLatest('DELETE_ITEM', deleteItems);
}

export default itemSaga;