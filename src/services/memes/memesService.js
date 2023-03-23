import service from '@/services/service'

const resourceMemes = '/get_memes'

// Realiza la petición al servidor..
export default {
    obtenerMemesService () {
        return service.get(`${resourceMemes}`)
      },
}
