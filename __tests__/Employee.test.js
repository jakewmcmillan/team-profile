const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should return employee name, id, and email', () => {
        const newEmployee = new Employee('Jake, 515, jakewmcmillan@gmail.com');
        expect(newEmployee.name).toBe('Jake');
        expect(newEmployee.id).toBe('515');
        expect(newEmployee.email).toBe('jakewmcmillan@gmail.com');
    });
    describe('getRole', () => {
        it('should return employee role', () => {
            const newEmployee = new Employee().getRole();
            expect(newEmployee).toBe('Employee');
        });
    });
});