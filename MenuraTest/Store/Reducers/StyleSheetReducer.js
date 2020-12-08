/*
Définition des themes
 */
import {getDataStorage, storeDataStorage} from '../../functions/storageHelper';

const winterStyle = {
   primary: '#2f5c8f',
   secondary: '#619fc8',
   accent: '#9ceaef',
   highlight: '#000000',
};
const autumnStyle = {
   primary: '#5e3023',
   secondary: '#895737',
   accent: '#c08552',
   highlight: '#f3e9dc',
};
const springStyle = {
   primary: '#b3f3aa',
   secondary: '#82ddad',
   accent: '#ffb0b0',
   highlight: '#000000',
};
const summerStyle = {
   primary: '#609ab7',
   secondary: '#97D4DF',
   accent: '#EFCEC4',
   highlight: '#000000',
};
const contrasteStyle = {
   primary: '#FFFFF0',
   secondary: '#f6ed19',
   accent: '#00c4c4',
   highlight: '#000000',
};

/*
variable de theme courant
 */
let currentStyle = {};

/**
 * fonction changement de theme
 * @param state
 * @param action
 * @return {{currentStyle: {secondary: string, highlight: string, accent: string, primary: string}}|{}|{currentStyle: {secondary: string, highlight: string, accent: string, primary: string}}}
 */
function switchTheme(state = currentStyle, action) {
   let nextState = {};

   switch (action.type) {
      case 'SET_WINTER':
         nextState = {
            ...state,
            currentStyle: winterStyle,
         };
         storeDataStorage('theme_key', 'winterStyle').then(() => {});
         return nextState || state;
      case 'SET_AUTUMN':
         nextState = {
            ...state,
            currentStyle: autumnStyle,
         };
         storeDataStorage('theme_key', 'autumnStyle').then(() => {});
         return nextState || state;
      case 'SET_SPRING':
         nextState = {
            ...state,
            currentStyle: springStyle,
         };
         storeDataStorage('theme_key', 'springStyle').then(() => {});
         return nextState || state;
      case 'SET_SUMMER':
         nextState = {
            ...state,
            currentStyle: summerStyle,
         };
         storeDataStorage('theme_key', 'summerStyle').then(() => {});
         return nextState || state;
      case 'SET_CONTRASTE':
         nextState = {
            ...state,
            currentStyle: contrasteStyle,
         };
         storeDataStorage('theme_key', 'contrasteStyle').then(() => {});
         return nextState || state;
      default:
         nextState = {
            ...state,
            currentStyle: autumnStyle,
         };
         getDataStorage('theme_key').then((r) => {
            if (r !== null) {
               nextState = {
                  ...state,
                  currentStyle: r,
               };
               return nextState || state;
            }
         });
         return nextState || state;
   }
}

export default switchTheme;
