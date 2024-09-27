import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 500 })
  name: string;

  @Field()
  @Column({ length: 100 })
  apellidos: string;

  @Field()
  @Column({ unique: true, nullable: false })
  email: string;

  @Field()
  @Column({ nullable: false })
  password: string;

  @Field()
  @Column({ default: "user" })
  rol: string;

  @Field(() => Boolean)
  @Column({ default: true })
  cuentaActiva: boolean;
}
