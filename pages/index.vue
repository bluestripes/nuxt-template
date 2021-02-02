<template>
    <div class="carousel">
        <AppSection style="" class="center">1 | {{view}}{{children}} <button @click="notStartPage">Nästa</button></AppSection>
        <AppSection style="background: #f3f3f3" class="center">2 | {{view}}{{children}}</AppSection>
        <AppSection style="" class="center">3 | {{view}}{{children}}</AppSection>
        <AppSection style="background: #f3f3f3" class="center">4 | {{view}}{{children}}</AppSection>
        <AppSection style="" class="center">5 | {{view}}{{children}}</AppSection>
        <AppSection style="background: #f3f3f3" class="center">6 | {{view}}{{children}}</AppSection>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

    data() {
        return {
            children: 0,
            childrenHeight: 0,
            showChild: 0,
            breaks : [],
            busy: false,
            scrollInProgress: false,
            view: 0,
            scrolling: false
        }
    },

    methods: {

        ...mapMutations({
            hideHeader: 'header/hide',
        }),

        click () {
            if(!this.scrollInProgress) {
                this.scrollInProgress = true
            
                this.$el.children[this.view].scrollIntoView({ behavior: 'smooth', block: 'end'});
                //this.$el.children[this.view].focus({preventScroll:true});
                setTimeout(() => this.scrollInProgress = false, 5000);   
            }
        },

        /*scrolling ( distance ) {
            if(!this.busy) {
            console.log("scrolling");
            // If distance close to breakpoint
            let index =  this.getElmentToFocus(distance)
            //console.log(index + " " + distance);
            this.showChild = (this.showChild != index) ? index : this.showChild
            console.log(this.showChild);
            this.scrollTo();
            }      
        },*/

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
                //console.log(this.childrenHeight)
                this.breaks.push(i*this.childrenHeight - (this.childrenHeight*0.8));
            }
        },

        async scrollTo () {
            this.$el.children[this.showChild].scrollIntoView({ behavior: 'smooth', block: 'end'});
            this.$el.children[this.showChild].element.focus({preventScroll:true});
            return 1
        },

        init() {
            // Set number if children
            this.children = this.$el.children.length - 1;
            
            // Set children height
            this.childrenHeight = (this.$el.clientHeight / this.children)

            // Create breakpoints
            this.createdBreakpoints();    
        },

        scrollUp () {
            if(!this.scrolling) {
                
                this.scrolling = true;
                this.view > 0 ? this.view-- : 0

                this.startScrolling();
            }
        },

        scrollDown () {
            if(!this.scrolling) {
                
                this.scrolling = true;
                this.view < this.children ? this.view++ : this.view;
                
                this.startScrolling(); 
            }
        },

        startScrolling () {

            this.view > 0 ? this.hideHeader(true): this.showHeader(false);
            
            this.smoothScroll( this.$el.children[this.view] )
                .then( () => {
                    this.scrolling = false
                    console.log("slutat scrolla")
                });
            
        },

        smoothScroll (elem, options) {
            return new Promise( (resolve) => {

                if( !( elem instanceof Element ) ) {
                    throw new TypeError( 'Argument 1 must be an Element' );
                }

                let same = 0; // a counter
                let lastPos = null; // last known X position

                // pass the user defined options along with our default
                const scrollOptions = Object.assign( { behavior: 'smooth' }, options );

                // Start scrolling
                elem.scrollIntoView( scrollOptions );
                requestAnimationFrame( check );

                // this function will be called every painting frame
                // for the duration of the smooth scroll operation
                function check() {
                    
                    const newPos = elem.getBoundingClientRect().left;
                    
                    if( newPos === lastPos ) { // same as previous
                        
                        if(same ++ > 2) { // if it's more than two frames
                        /*console.log('new position = ' + newPos)
                        console.log('last position = ' + lastPos)
                        console.log('same = ' + same)*/
            
                    return resolve(); // we've come to an halt
                    }
                }
                else {
                    same = 0; // reset our counter
                    lastPos = newPos; // remember our current position
                }
                // check again next painting frame
                requestAnimationFrame(check);
                }

            });

        },

        notStartPage () {
            this.hideHeader(true);
        },

        showHeader () {
            this.hideHeader(false);
        }

    },

    watch: {
        /*showChild () {
            this.busy = true;
            this.$el.children[this.showChild].scrollIntoView({ behavior: 'smooth', block: 'start'});
            setTimeout(() => { this.busy = false; }, 10000);
        }*/
    },

    mounted() {
        // Run init
        this.init();

        // Add eventlistener for scroll
        /*window.addEventListener('scroll', (event) => {
            // When scrolling send distance
            //console.dir(window)
            //console.dir(event)
            this.scrolling(window.scrollY);
        }, { passive: true });*/

        window.addEventListener('wheel', ( event ) =>
        {
            event.preventDefault();

            if (event.deltaY < 0)
            {
                    
                    this.scrollUp()
                
                
                //this.$el.children[2].scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
            
            else if (event.deltaY > 0)
            {
                this.scrollDown();
            }
        });
       
    }
}
</script>

<style scoped>

.carousel {
    background: pink;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    height: 100%;
}
</style>
