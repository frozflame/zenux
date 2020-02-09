/* HTML
<div.vapp>
    {% for note in notes %}
    <p class="note">{{ note }}</p>
    {% endfor %}
</div>
 */

var vapp = new Vue({
    el: '#vuediv',
    data: {
        notes: []
    }
});

