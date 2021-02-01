<template>
    <div>
        <AppSection style="" class="center">Joakim</AppSection>
        <AppSection style="background:pink" class="center">Lundell</AppSection>
        <AppSection style="background:blue" class="center">är Bäst</AppSection>
    </div>
</template>

<script>
export default {

    data() {
        return {
            children: 0,
            childrenHeight: 0,
            showChild: 0,
            breaks : []
        }
    },

    methods: {
        scrolling ( distance ) {

            // If distance close to breakpoint
            let index =  this.getElmentToFocus(distance)
            this.showChild = (this.showChild != index) ? index : this.showChild
                
        },

        getElmentToFocus ( dist ) {
            let index = 0;

            for(let i = 0; i < this.breaks.length; i++){

                if(this.breaks[i] > dist){
                    index = i;
                    break;
                }
            }
            return index
            
        },

        createdBreakpoints () {
            for (let i = 1; i <= this.children; i++) {
                this.breaks.push(i*this.childrenHeight - (this.childrenHeight*0.7));
            }
        },

        init() {
            // Set children height
            this.childrenHeight = (this.$el.clientHeight / 3)
            // Set number if children
            this.children = this.$el.children.length;
            // Create breakpoints
            this.createdBreakpoints();    
        }

    },

    watch: {
        showChild () {
            this.$el.children[this.showChild].scrollIntoView({ behavior: 'smooth', block: 'end'});
        }
    },

    mounted() {
        // Run init
        this.init();

        // Add eventlistener for scroll
        window.addEventListener('scroll', () => {
            // When scrolling send distance
            this.scrolling(window.scrollY);
        }, { passive: true });
       
    }
}
</script>

<style scoped>

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.full-height {
  scroll-snap-align: start;
  min-height: 100vh;
  background: silver
}
</style>
