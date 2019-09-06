import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';

const defaultStore = fromJS({

});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        default :
            return state;
    }
}