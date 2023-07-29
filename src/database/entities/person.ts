import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { RoleEntity } from './role';
import { CompanyEntity } from './company';

@Entity('person')
export class PersonEntity extends BaseEntity {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    companyName: string;

    @Column({ nullable: true })
    fantasyName: string;

    @Column({ type: 'enum', enum: ['individual', 'company'] })
    type: 'individual' | 'company';

    @Column({ nullable: true, type: 'date' })
    dateOfBirth: string;

    @Column({ type: 'enum', enum: ['male', 'female', 'other'], nullable: true })
    gender: 'male' | 'female' | 'other';

    @Column()
    taxDocument: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    cellPhone: string;

    @Column({ nullable: true })
    streetAddress: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    zipCode: string;

    @Column({ nullable: true })
    district: string;

    @ManyToMany(() => RoleEntity)
    @JoinTable({ name: 'personRole' })
    roles: RoleEntity[];

    @ManyToOne(() => CompanyEntity, (company) => company.people)
    company: CompanyEntity;
}
