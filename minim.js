     function trim(str) {
       if (typeof str !== 'string') {
         throw new Error('Only string parameter supported!');
       }
       return str.replace(/^\s+|\s+$/g, '');
     }
     