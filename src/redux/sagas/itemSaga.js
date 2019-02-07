import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        yield alert("Item Added!")
        yield put({ type: 'GET_ITEMS' });
    } catch (error) {
        console.log('error posting item to shelf', error);
    }
}

function* getItems(){
    try{
        let response = yield axios.get('/api/shelf');
        yield put({type: "SET_SHELF", payload: response.data});
    }
    catch(err){
        yield console.log('error in getItems saga', err);
    }
}

function* itemSaga() {
    yield takeLatest('ADD_TO_SHELF', addItem);
    yield takeLatest('GET_ITEMS', getItems);
}

export default itemSaga;