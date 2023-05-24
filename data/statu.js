const PROTO_PATH = "./grpc/statu.proto";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const statuProto = grpc.loadPackageDefinition(packageDefinition).statu;
const statu = new statuProto.StatusService(
  "localhost:30044",
  grpc.credentials.createInsecure()
);

module.exports = statu;