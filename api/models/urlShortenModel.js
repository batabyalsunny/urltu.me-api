/**
 * Contents DB operations on URL.
 */

var Cat = mongoose.model('Cat', { name: String })

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
})