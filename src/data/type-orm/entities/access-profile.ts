import { BaseEntity } from './base';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { SystemFeatureEntity } from './system-feature';
import { UserEntity } from './user';

@Entity('accessProfile')
export class AccessProfileEntity extends BaseEntity {
    @Column()
    name: string;

    @ManyToMany(() => SystemFeatureEntity)
    @JoinTable({ name: 'permission' })
    permissions: SystemFeatureEntity[];

    @OneToMany(() => UserEntity, (user) => user.accessProfile)
    users: UserEntity[];
}
