<template>

</template>


<script>
    var main = new Vue ({
        el: '#welcomeModal',
        methods: {
            toggleTable: function() {
                toggle(document.getElementById('table'));
                document.getElementById('welcome-cat').hidden = !document.getElementById('welcome-cat').hidden;
            },
            toggle: function(container) {
                container.classList.toggle("hidden");
            }
        }
    });
</script>


<style>

</style>
