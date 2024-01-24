import fastfy from 'fastify'

const app = fastfy()

app.get('/hello', () => {
  return 'Hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server running')
  })
