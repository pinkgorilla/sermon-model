var validate = require('../src/validator').date;
 
it("#01. Attendance should valid", function () {
    var Attendance = require('../src/date/attendance');
    validate.attendance(new Attendance());
});

it("#02. AttendanceReason should valid", function () {
    var AttendanceReason = require('../src/date/attendance-reason');
    validate.attendanceReason(new AttendanceReason());
});
