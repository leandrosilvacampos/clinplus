import axios from 'axios';
import { describe, it, expect } from 'vitest';

describe('/schedules POST', () => {
    it('should return 200', async () => {
        const res = await axios.post('http://localhost:3000/schedules', { name: 'John Doe' });

        expect(res.status).toBe(200);
    });
});
