const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const StatuProtoPath = './grpc/statu.proto';
const StatuProtoDefinition = protoLoader.loadSync(StatuProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  arrays:true,
  oneofs: true,
});
const StatuProto = grpc.loadPackageDefinition(StatuProtoDefinition).statu;

const StatusService = {
    getstatus: (call, callback) => {
     const status=call.request.status;
    callback(null, { status });
  },
  getstatu: (call, callback) => {
    const status=call.request.status;
   callback(null, { status });
 },
 getmessage: (call, callback) => {
    const message=call.request.message;
   callback(null, { message });
 }
}
const server = new grpc.Server();
server.addService(StatuProto.StatusService.service, StatusService);
server.bindAsync(`127.0.0.1:30044`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Failed to bind server:', err);
    return;
  }

  console.log(`Server is running on port 30044`);
  server.start();
});