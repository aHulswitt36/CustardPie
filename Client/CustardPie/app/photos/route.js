import Ember from 'ember';

// let photos = [
//   {
//   id: 1,
//   source: 'assets/images/01.jpg',
//   title: 'Test'
// }, {
//   id: 2,
//   source: 'assets/images/02.jpg',
//   title: 'Test'
// }, {
//   id: 3,
//   source: 'assets/images/03.jpg',
//   title: 'Test'
// }, {
//   id: 4,
//   source: 'assets/images/04.jpg',
//   title: 'Test'
// }, {
//   id: 5,
//   source: 'assets/images/05.JPG',
//   title: 'Test'
// }, {
//   id: 6,
//   source: 'assets/images/06.JPG',
//   title: 'Test'
// }, {
//   id: 7,
//   source: 'assets/images/mike.jpg',
//   title: 'Mike'
// }, {
//   id: 8,
//   source: 'assets/images/001.JPG',
//   title: 'Mike'
// }, {
//   id: 9,
//   source: 'assets/images/002.JPG',
//   title: 'Mike'
// }, {
//   id: 10,
//   source: 'assets/images/006.JPG',
//   title: 'Mike'
// }, {
//   id: 11,
//   source: 'assets/images/007.JPG',
//   title: 'Mike'
// }, {
//   id: 12,
//   source: 'assets/images/CPGroup.png',
//   title: 'Mike'
// }];

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('photo');
  }
});
