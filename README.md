## Image

![Create-Next-App](https://github.com/user-attachments/assets/c859a6ec-3785-4fce-9b7b-6eecf4f51edc)

## Tools & Packages Used

- Shadcn UI: <https://ui.shadcn.com/docs/installation/next>
- Nextjs: <https://nextjs.org/>
- NanoId: <https://www.npmjs.com/package/nanoid>

## Installation Steps

1. **Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=

DATABASE_URL=
NEXT_PUBLIC_BASE_URL=
```

or run the following command:

```bash
cp env .env
```

2. **Start the Docker environment**

To launch the application and database in Docker, first, run the following command:。

```bash
docker compose up -d
```

This command will start the Docker containers in the background.

3. **Start the development server**

Next, start the development server by running:

```bash
npm run dev
```

You can access the application in your browser at [http://localhost:3000](http://localhost:3000).

4. **Apply the schema to the database with Prisma**

Use Prisma to sync the schema to the database. The `push` command reflects the schema directly onto the database without generating a migration file.

```bash
npx prisma db push
```

This command synchronizes the Prisma schema with the database.

5. **Open Prisma Studio**

Prisma Studio is a GUI tool that allows you to directly view and manage database data. To open Prisma Studio, execute the following command:

```bash
npx prisma studio
```

This will open [http://localhost:5555](http://localhost:5555) in your browser, where you can view and edit the database content.

## Reference

- Prisma NextJs Guide: <https://www.cand.site/blog/prisma-nextjs-guide>
