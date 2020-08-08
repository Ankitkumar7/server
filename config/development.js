var northEastSubSchemeConfiguratuib = [
    'State Scheme - MIZORAM',
    'State Scheme - NAGALAND',
    'State Scheme - MANIPUR',
    'State Scheme - MEGHALAYA',
    'State Scheme - WEST BENGAL',
    'State Scheme - NAGALAND',
    'State Scheme - MIZORAM',
    'State Scheme - MANIPUR',
    'State Scheme - MEGHALAYA',
    'State Scheme - SIKKIM',
    'State Scheme - ASSAM',
    

  ]
module.exports = {
    server: {
      port: process.env.batchServicePort || 2023,
      host: process.env.batchServiceHost || '127.0.0.1',
      url: `http://${process.env.batchServiceHost || '127.0.0.1'} :${process.env.batchServicePort || '3006'}`,
      isProd: false
    },
    database: {
      uri: process.env.uri || 'mongodb://10.0.1.198:27017,10.0.2.182:27017,10.0.2.114:27017/SDMSUat?replicaSet=SDMSUat',
      auth: process.env.auth || { user: 'testuser', password: 'testuser123' },
      withoutAuth: 'mongodb+srv://admin:admin@cluster0.tdyon.mongodb.net/specialvigilanceunit?retryWrites=true&w=majority',
      isProd: true
    },
    externalServices: {
      emailService : "https://localhost:3027/api/v1/comm/node/email",
    },
    securityDetails: {
      secretKey: 'transneuron',
      whitelistIPs: []
    },
  }
  