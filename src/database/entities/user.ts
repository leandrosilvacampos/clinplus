import { BaseEntity } from './base';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { PersonEntity } from './person';

@Entity('user')
export class UserEntity extends BaseEntity {
    @Column()
    password: string;

    @OneToOne(() => PersonEntity)
    @JoinColumn()
    person: PersonEntity;
}
