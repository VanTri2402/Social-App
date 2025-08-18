import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
// File này giống như “quản lý cổng kết nối DB chung cho toàn app”.
// Không có nó, mỗi lần reload code bạn sẽ tạo thêm 1 connection, đến lúc nào đó DB từ chối kết nối vì quá tải.
// Nó sẽ giúp bạn tránh được lỗi “Too many connections” khi phát triển ứng dụng với Prisma.