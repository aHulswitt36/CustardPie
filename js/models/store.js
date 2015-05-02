CustardPie.Store = DS.Store.extend({
	revision: 4,
	adapter: "CustardPie.ApplicationAdapter"
});

CustardPie.ApplicationAdapter = DS.FixtureAdapter.extend();
//
// CustardPie.ApplicationAdapter = DS.RESTAdapter.extend({
// 	host: 'http://localhost:8080',
// 	namespace: 'api'
// });
//
// CustardPie.ApplicationSerializer = DS.RESTSerializer.extend({
// 	primaryKey: '_id'
// });

CustardPie.ApplicationSerializer = DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(
                record.constructor, relationship);

        if (relationshipType === 'manyToNone'
                || relationshipType === 'manyToMany'
                || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
            // TODO support for polymorphic manyToNone and manyToMany
            // relationships
        }
    }
});
