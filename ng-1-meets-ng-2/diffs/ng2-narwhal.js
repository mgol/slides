@Component({
    selector: 'my-narwhal',
    bind: {
        name: 'name'
    }
});
@Template({
    inline: '&lt;div&gt;He is {{ bigName() }}.&lt;/div&gt;'
});
class Narwhal {
    bigName() {
        return this.name.toUpperCase();
    }
}
