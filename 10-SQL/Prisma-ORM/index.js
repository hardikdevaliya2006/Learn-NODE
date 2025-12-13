import prisma from "./database/prisma.js";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Hardik",
      email: "hardik@example.com",
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
