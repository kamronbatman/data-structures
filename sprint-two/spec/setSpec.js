describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add number values to a set', function(){
    set.add(3);
    set.add(14);
    expect(set.contains(3)).to.equal(true);
    expect(set.contains(14)).to.equal(true);
  });

  it('should remove number values from a set', function(){
    set.add(7);
    set.remove(7);
    expect(set.contains(7)).to.equal(false);
  });

  it('should add objects as values to a set and only contain added objects.', function(){
    set.add({artist: 'primus'});
    set.add({name: 'prince', age: 'nope'});
    expect(set.contains({artist: 'primus'})).to.equal(true);
    expect(set.contains({name: 'prince', age: 'nope'})).to.equal(true);
    expect(set.contains({first:'brian', last:'cleary'})).to.equal(false);
  });

  it('should remove objects as values from a set but only those values', function(){
    set.add({song: 'Foil'});
    set.add({name: 'prince', age: 'nope'});

    set.remove({song: 'Foil'});
    expect(set.contains({name: 'prince', age: 'nope'})).to.equal(true);
    expect(set.contains({song: 'Foil'})).to.equal(false);
  });
});
