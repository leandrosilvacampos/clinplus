export const translateScheduleStatus = (status: 'scheduled' | 'completed' | 'canceled'): string => {
    switch (status) {
        case 'scheduled':
            return 'Agendado';
        case 'completed':
            return 'Concluído';
        case 'canceled':
            return 'Cancelado';
        default:
            return '';
    }
};
