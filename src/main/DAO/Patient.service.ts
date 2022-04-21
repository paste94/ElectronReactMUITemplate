import Parse from "./http-common";


/**
 * Ottiene la subscription agli impiegati
 * @param {function} callback callback per successo.
 * @param {function} callbackError callback per errore.
 */
 async function subscribeImpiegati(callback: Function, callbackError) {
  const query = new Parse.Query(impiegati);
  const subscription = await query.subscribe();

  subscription.on('open', () => {
      console.log('Impiegati opened');
      getAllImpiegati(callback, callbackError)
  })

  subscription.on('create', (object) => {
      console.log('impiegato created: ', object);
      getAllImpiegati(callback, callbackError);
  });

  subscription.on('update', (object) => {
      console.log('impiegato updated', object);
      getAllImpiegati(callback, callbackError);
  });

  subscription.on('enter', (object) => {
      console.log('impiegato entered', object);
      getAllImpiegati(callback, callbackError);
  });

  subscription.on('leave', (object) => {
      console.log('impiegato left', object);
      getAllImpiegati(callback, callbackError);
  });

  subscription.on('delete', (object) => {
      console.log('impiegato deleted', object);
      getAllImpiegati(callback, callbackError);
  });

  subscription.on('close', () => {
      console.log('subscription impiegato closed');
  });
}
