import { ServiceFactory } from '@/services/ServiceFactory';
const memes = ServiceFactory.get('memesService');

export async function obtenerMemes(context) {
    await memes.obtenerMemesService()
      .then(response => {
        let resultado = Object.assign(response);
        context.commit('memesModule/SetMemes',
        resultado.data.data.memes, { root: true });
      }).catch(error => {
        context.commit('memesModule/SetMemes',
          error, { root: true });
        });                             
  }
  