import { createStore } from 'redux';
import { contacts } from '../static-data';

const store = createStore(reducer, { contacts });
