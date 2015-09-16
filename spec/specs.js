describe('Player', function() {
  it("returns the players mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("it returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
  });

  it("returns the players mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.markBy(testPlayer)
    expect(testSpace.markedBy).to.equal(testPlayer);
  });
});


describe("Board", function() {
  it("creates 9 spaces when it is initialized", function(){
    var testBoard = new Board([(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)]);
    expect(testBoard.spaces).to.eql([(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)]);
  });
});
