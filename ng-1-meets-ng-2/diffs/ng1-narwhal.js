myModule.component('myNarwhal', () => {
    return {
        bind: {
            name: '&'
        },
        controller: Narhwal,
        template: '&lt;div&gt;Hi {{ myNarwhal.bigName() }}&lt;/div&gt;'
    };
});
class Narhwal {
   bigName() {
       return this.name.toUpperCase();
   }
}
