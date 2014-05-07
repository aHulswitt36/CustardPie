CustardPie.Store = DS.Store.extend({
	revision: 3,
	adapter: "CustardPie.ApplicationAdapter"
});

CustardPie.ApplicationAdapter = DS.LSAdapter.extend();

//CustardPie.ApplicationAdapter = DS.FixtureAdapter.extend();


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