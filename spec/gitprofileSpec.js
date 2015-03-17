describe('Api', function() {

  beforeEach(function() {
    $(document).ready(function() {});
  });

  it('should have a token', function() {
    expect(token).toBe('?access_token=cc7973a872b286db5a1508ab807818c8ef7978f0')
  });

});