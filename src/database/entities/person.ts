import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';
import { RoleEntity } from './role';

@Entity('person')
export class PersonEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    companyName: string;

    @Column()
    fantasyName: string;

    @Column()
    type: 'individual' | 'company';

    @Column()
    dateOfBirth: string;

    @Column()
    gender: 'male' | 'female' | 'other';

    @Column()
    taxDocument: string;

    @Column()
    email: string;

    @Column()
    cellPhone: string;

    @Column()
    streetAddress: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipCode: string;

    @Column()
    district: string;

    @ManyToMany(() => RoleEntity)
    @JoinTable({ name: 'personRole' })
    roles: RoleEntity[];
}
