import { BaseEntity } from './base';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { PersonEntity } from './person';
import { AccessProfileEntity } from './access-profile';

@Entity('user')
export class UserEntity extends BaseEntity {
    @Column()
    password: string;

    @OneToOne(() => PersonEntity)
    @JoinColumn()
    person: PersonEntity;

    @ManyToOne(() => AccessProfileEntity, (accessProfile) => accessProfile.users)
    accessProfile: AccessProfileEntity;
}
