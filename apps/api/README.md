# Gastos API

**Prisma Migration**

https://www.prisma.io/docs/orm/overview/databases/cloudflare-d1

```bash
pnpm wrangler d1 migrations create karaokems-development create_init_table
pnpm wrangler d1 migrations create karaokems-testing create_init_table
```

```bash
pnpm prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script --output prisma/migrations/
```

```bash
pnpm prisma migrate diff --from-local-d1 --to-schema-datamodel ./prisma/schema.prisma --script --output prisma/migrations/
```

```bash
pnpm wrangler d1 migrations apply karaokems-development --local
pnpm wrangler d1 migrations apply karaokems-testing --remote
```

```bash
pnpm prisma generate 
```