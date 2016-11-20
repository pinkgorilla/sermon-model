'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Attendance extends BaseModel {
    constructor(source, type) {
        super(type || 'attendance', '1.0.0');

        //Define properties
        this.userId={};
        this.user={};
        this.date = new Date();
        this.attend = false;
        this.attendanceReasonId = {};
        this.attendanceReason = {};
        this.sharing = '';
        this.learning = '';
        this.rate = 0;

        this.copy(source);
    }
};
