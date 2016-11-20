require("should"); 

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('userId');
    data.userId.should.be.Object();
    
    data.should.have.property('user');
    data.user.should.be.Object();

    data.should.have.property('date');
    data.date.should.be.Date();
    
    data.should.have.property('attend');
    data.attend.should.instanceOf(Boolean);
    
    data.should.have.property('attendanceReasonId');
    data.attendanceReasonId.should.be.Object();
    
    data.should.have.property('attendanceReason');
    data.attendanceReason.should.be.Object();

    data.should.have.property('sharing');
    data.sharing.should.be.String();
    
    data.should.have.property('learning');
    data.learning.should.be.String();
    
    data.should.have.property('rate');
    data.rate.should.be.Number();
};