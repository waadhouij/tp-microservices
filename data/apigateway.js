const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const StatuProtoPath = './grpc/statu.proto';
const StatuProtoDefinition = protoLoader.loadSync(StatuProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  arrays: true,
  oneofs: true,
});
const StatuProto = grpc.loadPackageDefinition(StatuProtoDefinition).statu;

// Création du service et implémentation des méthodes
const StatusService = {
  /**
   * Méthode pour récupérer le statut.
   * @param {object} call - Objet RPC.
   * @param {function} callback - Fonction de rappel pour renvoyer la réponse.
   */
  getstatus: (call, callback) => {
    console.log('Appel à la méthode getstatus');
    
    const status = call.request.status;

    // Validation des données
    if (!status || typeof status !== 'string') {
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Le statut est invalide ou manquant'
      });
      return;
    }

    // Implémentation de getstatus
    callback(null, { status });
  },

  /**
   * Méthode pour ...
   * (ajoutez des commentaires similaires pour getstatu et getmessage)
   */
  getstatu: (call, callback) => {
    console.log('Appel à la méthode getstatu');
    const status = call.request.status;

    // Validation des données
    // (ajoutez des validations similaires à getstatus)

    // Implémentation de getstatu
    callback(null, { status });
  },

  getmessage: (call, callback) => {
    console.log('Appel à la méthode getmessage');
    const message = call.request.message;

    // Validation des données
    // (ajoutez des validations similaires à getstatus)

    // Implémentation de getmessage
    callback(null, { message });
  }
}

// Configuration du serveur gRPC
const server = new grpc.Server();
server.addService(StatuProto.StatusService.service, StatusService);

// Lier et démarrer le serveur
server.bindAsync('127.0.0.1:30044', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Erreur lors de la liaison du serveur:', err);
    return;
  }

  console.log('Serveur en cours d\'exécution sur le port 30044');
  server.start();
});
