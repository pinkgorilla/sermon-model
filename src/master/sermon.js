'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Sermon extends BaseModel {
    constructor(source, type) {
        super(type || 'sermon', '1.0.0');

        //Define properties
        this.title = '';
        this.artist = '';
        this.duration = 0;
        this.year = 0;
        this.month = 0;
        this.description = '';
        this.tags = '';
        this.uri = '';

        this.copy(source);
    }
}
