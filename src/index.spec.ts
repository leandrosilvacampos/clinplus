import { Person } from '@/index';

it('should should sum', () => {
    const person = new Person();

    expect(person.sayHello()).toBe('Hello, world!');
});
