/* Horoscope Generator (part of Codecademy's full stack training)
   Author: Anthony Marini
   
   The goal is to generate random astrology readings composed of three different
   parts: the theme, the sign, and the reading itself
*/

/* Horoscope Generator (part of Codecademy's full stack training)
   Author: Anthony Marini
   
   The goal is to generate random astrology readings composed of three different
   parts: the theme, the sign, and the reading itself
*/

const themeList = ['Love', 'Work', 'Dating'];
const signList = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 
   'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const readingList = [['Surprise throwbacks are bound to bring unexpected feelings', 
   'Single or taken, you\'re inspired and likely looking for ways to explore your horizons, so don\'t hesitate to spice things up a bit', 
   'Single or already taken, it\'s important for you to take a second to reflect, review, and re-assess the situation today', 
   'You\'re feeling more adventurous than usual today, and it\'s all thanks to your planetary ruler'],
   ['Luck is brewing for you in terms of your work relationships and business collaborations',
   'This is your creative truth, and the cosmos is encouraging you to align with it',
   'Your health may be highlighted for you around this time',
   'This would be an ideal day to tap into your natural creative power'],
   ['You\'re feeling pretty great today, but you should push things to the edge to really feel alive',
   'You\'re spending more time than usual at home -- or maybe thinking about home.',
   'If you can handle the details of today\'s big business, you should be golden',
   'You\'re feeling the urge to put on a show for someone -- maybe you\'re telling jokes nonstop, maybe you\'re popping and locking on the dance floor, or maybe it\'s something much more private.']];

const horoscopeGen =  {
    _themes: themeList,
   _signs: signList,
   _readings: readingList,
   getReading() {
      let str = '';
      let themeNum = Math.floor( Math.random() * themeList.length );
      let signNum = Math.floor( Math.random() * signList.length );
      let readingNum = Math.floor( Math.random() * this._readings[themeNum].length );

      return 'Theme: ' + this._themes[themeNum] + '\nYour sign: ' + this._signs[signNum] + 
         '\nYour reading: ' + readingList[themeNum][readingNum];
   }
};