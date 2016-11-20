module.exports = {
        auth: {
                account: require("./auth/account-validator"),
                profile: require("./auth/profile-validator"),
                role: require("./auth/role-validator")
        },
        date: {
                attendanceReason: require("./date/attendance-reason-validator"),
                attendance: require("./date/attendance-validator")
        },
        master: {
                sermon: require("./master/sermon-validator")
        }
};
