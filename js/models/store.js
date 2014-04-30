CustardPie.Store = DS.Store.extend({
	revision: 3,
	adapter: "CustardPie.ApplicationAdapter"
});

//CustardPie.ApplicationAdapter = DS.LSAdapter.extend();

CustardPie.ApplicationAdapter = DS.FixtureAdapter.extend();
