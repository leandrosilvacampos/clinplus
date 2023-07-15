import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base';

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

    @Column()
    crm: string;

    @Column()
    observations: string;
}
