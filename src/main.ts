import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "Hello, Prisma!",
            content: "This is a simple post."
        }
    });
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
