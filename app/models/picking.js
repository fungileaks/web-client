import DS from 'ember-data';

export default DS.Model.extend({
  pickedAt: DS.attr("date"),
  username: DS.attr("string"),
  species: DS.attr("string"),
  lat: DS.attr("decimal"),
  lng: DS.attr("decimal")
});
