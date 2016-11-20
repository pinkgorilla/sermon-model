'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Reason extends BaseModel {
    constructor(source, type) {
        super(type || 'attendance-reason', '1.0.0');

        //Define properties 
        this.name = '';
        this.remark = '';

        this.copy(source);
    }
};
