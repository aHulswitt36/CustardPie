import DS from 'ember-data';

var Member = DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  photo: DS.hasMany('photo')
});

Member.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Michael Francis",
      bio: ""
    },
    {
      id: 2,
      name: "Pete Felice",
      bio: "The first person/group to inspire me musically was when I saw The Beatles on the Ed Sullivan show and was blown out." +
          "Basically, all the music on tv and radio hit me hard as a kid. I loved it all ! I remember our home always being full of music" +
          "from Motown to classic rock to easy listening and Italian traditional. My favorite artist/group is The Beatles, hands down."+
          "I don't think anyone has done more for popular music then the Lads. Look at all they've inspired ! What a body of work !"+
          "My buddy John and I started the first 'air' band back in the mid 70's called CRUM ! We made guitars out of wood and amps"+
          "out of boxes from the A & P supermarket. Creedence Clearwater Revival was our best stuff ! We were 15 - 17 years old."+
          "As for Pete's favorite song to play with Custard Pie Cleveland, 'with a working set list of over 400 songs, it would"+
          "be very difficult to choose - I have favorites in every genre of music'."
    },
    {
      id: 3,
      name: "Rick Vargo",
      bio: "The first people to inspire me musically was my mom and grandfather. My mom was a big Motown fan and played it throughout the "+
      "house every day. My grandfather would sing me songs all the time, sometimes making up his own words to makeme laugh. The first artist "+
      "I remember hearing was Tom Jones. My first concert was the Jackson 5 at The Ohio State Fair. I was 6 and Michael Jackson was 7. At that "+
      "moment, I knew THAT is what I would love to do. My favorite artist as an adult is Todd Rundgren and I have seen him in concert close to 20 times. "+
      "The first band that I was a member of was called Cut Glass. Mike Gruszewski and myself started jamm'in, ok making noise, back in 1977. "+
      "We were joined by fellow bandmate, Greg Speelman, in 1980. By 1981 we were in the studio recording our first album. "
    },
    {
      id: 4,
      name: "Dave Hutson",
      bio: "The first person to inspire me musically, was probably my mother. She was always listening to folk music, like" +
      "The Brother's Four, and The New Christy Minstrels. She also listened to a lot of 'Pop Orchestral' stuff like Percy Faith,"+
      "Andre Kostelantez, Paul Mauriat, and the like. My dad is a cellist, but he NEVER listens to music...only sports."+
      "My mom would put stuff on the old mono record player, and I would use a toy gun, like a guitar to mimic. The first artist"+
      "I recall hearing were The Brother's Four. My favorite artist would have to be The Beatles. My first band, was an unnamed"+
      "garage band, at about 15 years old. We played in the family room of a classmate, Tom Board. We played 'Eighteen' by Alice"+
      "Cooper a lot...44 years later, and I'm still playing it."
    },
    {
      id: 5,
      name: "Rick Frank",
      bio: "I started playing piano in 1965 at the age of 9, when my parents decided to haul this nice piece of furniture, a Wurlitzer"+
      "console piano, down from New York to put in our house. My brothers had started playing clarinet and coronet, respectively, "+
      "so when my dad asked me what I wanted to learn to play, I picked the piano because it was already in our house.  So he set me up with "+
       "lessons pretty much immediately and I took lessons from 3 concert pianists over the span of 6 years. I performed publicly for the "+
       "first time at age 11 mostly accompanying my mom when we were picked to play at various local events, nursing homes, etc. My life "+
       "for the next 7 years consisted of playing for singing class in elementary school, the junior high choirs in junior high and the "+
       "high school stage band during my 3 years at the high school, besides various talent shows and piano competitions performing classical music. "+
       "The high school stage band is where I got my first band experience from age 15 to graduation where there were brass instruments, bass guitar, "+
       "guitar, drums and myself on piano. After high school I was motivated mostly by two bands, The Doors and Iron Butterfly. I actually have "+
       "performed Inagaddadavida with one of my rock bands before Custard Pie. So those two 1960's bands are what got me started looking at "+
       "electronic keyboards. My first electronic keyboard was a little farfisa organ that I paid $200 for that sounded just like The Door's keyboard.  "+
       "A short time later I purchased a Hammond organ and started performing on the weekend with bands from 1974 to 1976. Then in 1976 I auditioned "+
       "for a beginner lounge band through the Marty Conn Talent Agency and traveled on the road full time with a variety of bands from 1976 to 1980"+
       "playing hotels, 5 and 6 days a week from Cleveland to as far south as Jacksonville, FL and then as far west as Kansas City and then as far "+
        "east as Philadelphia. This time period is where I learned to play all different kinds of music, so as a result I have performed many different "+
        "styles of music with various bands. In 1980, I dropped out of music altogether for business purposes then in 1998 while selling pianos' "+
        "and organs at a music store in West Seneca, NY, I discovered the Technic line of professional keyboards and moved back to Ohio to jumpstart "+
        "my musical career again. I have performed with every kind of band known to mankind, jazz, rock and country. I have performed as a duo, trio, "+
        "four piece, and up to 8 piece bands. My most memorable musical moment was when my band was performing at the Downtown Louisville, KY Holiday "+
        "Inn on a particular evening when the Atlanta Rhythm Section stopped in after a concert and we let them come up and entertain the crowd on our "+
        "instruments bc I had developed nausea and couldn't perform for a while."
    },
  ]
});

export default Member;
