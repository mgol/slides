angular.module('hype', ['unicorn'])
.service('unicornHype', ['unicornHorn', '$q', UnicornHype]);
class UnicornHype {
    constructor(unicornHorn, $q) {
        this.$q = $q;
        this.horn = unicornHorn;
    }
    findUnicorn() {
        return this.$q((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.horn.thrust();
                resolve(`The unicorn is at ${pos.coords.latitude}`);
            }, reject);
        });
    }
}
