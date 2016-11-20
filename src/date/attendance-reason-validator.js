require("should"); 

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('name');
    data.name.should.be.String();

    data.should.have.property('remark');
    data.remark.should.be.String();
};