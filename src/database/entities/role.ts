import { BaseEntity } from './base';
import { Column, Entity } from 'typeorm';

@Entity('role')
export class RoleEntity extends BaseEntity {
    @Column()
    name: string;
}
