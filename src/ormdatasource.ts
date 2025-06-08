import { DataSource } from 'typeorm';
export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'postgres',    
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'mediumclone',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false, // This is not recommended for production, use migrations instead
    migrations: [__dirname + '/**/migration{.ts,.js}'],
})



