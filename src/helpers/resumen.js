import { firebaseAuth, ref } from '../config/constants'

export function setResumenValues(valor) {
  return ref.child('ejercicio_1/meta').transaction((meta) => {
    if(meta === null){
      meta = {
        val: 0,
        cant: 0,
        avg: 0
      }
      return meta
    } else {

      let newVal = meta.val + parseInt(valor);
      let newCant = meta.cant + 1;
      let newAvg = newVal/newCant;

      meta.val = newVal;
      meta.cant = newCant;
      meta.avg = newAvg;

      return meta
    }
  }, (error, commited, snap) => {
    console.log(error)
  })
}


export function consultarPromedio () {
  return ref.child('ejercicio_1/meta/avg')
    .once('value')
    .then(snap => snap.val())
}