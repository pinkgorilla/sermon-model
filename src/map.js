module.exports = { 
    auth: {
        type: {
            Account: 'account',
            Profile: 'profile',
            Role: 'role'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles'
        }
    },
    date: {
        type: { 
            AttendanceReason: 'attendance-reason',
            Attendance: 'attendance',
        },
        collection: { 
            AttendanceReason: 'attendance-reasons',
            Attendance: 'attendances'
        }
    } ,
    master: {
        type: {
            Sermon: 'sermon'
        },
        collection: {
            Sermon: 'sermons'
        }
    } 
};
