module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    date: {
        Attendance: require('./src/date/attendance'),
        AttendanceReason: require('./src/date/attendance-reason')
    },
    master: {
        Sermon: require('./src/master/sermon')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
};
