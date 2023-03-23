import memesService from '@/services/memes/memesService'

const services = {
    memesService: memesService
  // agregar los nuevos servicios
}

export const ServiceFactory = {
  get: name => services[name]
}
