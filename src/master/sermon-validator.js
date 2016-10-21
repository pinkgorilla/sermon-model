require("should"); 

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('title');
    data.title.should.be.String();

    data.should.have.property('artist');
    data.artist.should.be.String();
    
    data.should.have.property('duration');
    data.duration.should.instanceOf(Number);

    data.should.have.property('year');
    data.year.should.instanceOf(Number);
    
    data.should.have.property('month');
    data.month.should.instanceOf(Number);

    data.should.have.property('description');
    data.description.should.be.String();
  
    data.should.have.property('tags');
    data.tags.should.be.String();
    
    data.should.have.property('uri');
    data.uri.should.be.String();
};