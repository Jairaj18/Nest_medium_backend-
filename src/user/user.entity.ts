// src/user/user.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
  } from 'typeorm';
  import { hash } from 'bcrypt';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    username: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column({ default: '' })
    bio: string;
  
    @Column({ default: '' })
    image: string;
  
    @Column({ default: true })
    isActive: boolean;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await hash(this.password, 10);
    }
  }
  