export interface IAgreementDTO {
    id: number;
    name: string;
    discountType: 'absolute' | 'percentage';
    discountValue: number;
}
