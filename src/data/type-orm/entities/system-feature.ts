import { EHttpVerb } from '@/shared/enums/http-verb';
import { BaseEntity } from './base';
import { Column, Entity } from 'typeorm';

@Entity('systemFeature')
export class SystemFeatureEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    route: string;

    @Column({
        type: 'enum',
        enum: EHttpVerb,
    })
    httpVerb: EHttpVerb;
}
