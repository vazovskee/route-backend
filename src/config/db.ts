export const db = {
    database: process.env.DB_NAME || 'db_name',
    user: process.env.DB_USER || 'db_user',
    password: process.env.DB_PASSWORD || 'db_password',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5434,
};
