const Manager = require('../lib/Manager');

describe('getName', () => {
    it('should return employee name', () => {
        const newEmployee = new Employee('Jake');
        expect(newEmployee.name).toBe('Jake');
    });
    describe('getId', () => {
        it('should return employee ID', () => {
            const newEmployee = new Employee('515');
            expect(newEmployee).toBe('515');
        });
    });
    describe('getEmail', () => {
        it('should return employee email', () => {
            const newEmployee = new Employee('jakewmcmillan@gmail.com');
            expect(newEmployee).toBe('jakewmcmillan@gmail.com');
        });
    });
});