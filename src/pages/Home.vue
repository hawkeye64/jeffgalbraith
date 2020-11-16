<template>
  <q-page class="flex flex-start justify-center inset-shadow">

    <div id="wrapper" class="relative-position">
      <div class="inner-container">
        <svg id="svg-container" :style="svgStyle">
        </svg>
      </div>
      <p :style="style">Calgary, Alberta CANADA<br><br>Full-Stack Developer<br>FOSS Contributor<br>Camping and Outdoor Enthusiast</p>

      <div class="continue__arrow-down row justify-center absolute">
        <q-icon class="continue__arrow-down-icon q-mt-xl" name="expand_more" size="50px" />
      </div>
    </div>

    <components />
    <profile />
    <social />

  </q-page>
</template>

<script>
let Snap
export default {
  name: 'Home',

  meta: {
    title: 'Jeff Galbraith Personal Site',
    meta: {
      description: { name: 'description', content: 'Jeff Galbraith - Full-stack developer, FOSS contributor and Camping and Outdoor Enthusiast.' },
      keywords: { name: 'keywords', content: 'home full stack developer FOSS contributor camping outdoor enthusiast' },

      // Google / Search Engine Tags
      itempropDesc: { itemprop: 'description', content: 'Jeff Galbraith - Full-stack developer, FOSS contributor and Camping and Outdoor Enthusiast.' },
      itempropImage: { itemprop: 'image', content: 'https://www.jeffgalbraith.dev/avatar.jpg' },

      // Facebook Meta Tags
      ogUrl: { property: 'og:url', content: 'https://www.jeffgalbraith.dev' },
      ogType: { property: 'og:type', content: 'website' },
      ogTitle: { property: 'og:title', content: 'Jeff Galbraith' },
      ogDesc: { property: 'og:description', content: 'Jeff Galbraith - Full-stack developer, FOSS contributor and Camping and Outdoor Enthusiast.' },
      ogImage: { property: 'og:image', content: 'https://www.jeffgalbraith.dev/avatar.jpg' },

      // Twitter Meta Tags
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: 'Jeff Galbraith' },
      twitterDesc: { name: 'twitter:description', content: 'Jeff Galbraith - Full-stack developer, FOSS contributor and Camping and Outdoor Enthusiast.' },
      twitterImage: { name: 'twitter:image', content: 'https://www.jeffgalbraith.dev/avatar.jpg' }
    }
  },

  components: {
    Profile: () => import('../components/Profile'),
    Components: () => import('../components/Components'),
    Social: () => import('../components/Social')
  },

  data () {
    return {
      currentIndex: 0,
      intervalId: null,
      currentColor: '#00A0F7',
      colors: [
        '#FF8C0A', // orange
        '#21C900', // green
        '#00A0F7' // blue
      ],
      paths: [
        'm 90.00301,51.100588 -10.056012,-0.591628l-0.210068,0l0,-4.106052c0,-0.107178 -0.220717,-0.252944 -0.491775,-0.396564c0.137464,-0.361194 0.512103,-1.514447 0.526625,-3.41474a7.149115,7.915211 0 0 0 0.528559,-0.750257l-0.086156,-0.352621a0.0697,0.077171 0 0 0 -0.031947,-0.058948c-0.0697,-0.054662 -0.290417,-0.061093 -1.005812,0.446939c-0.604068,0.428716 -3.048419,1.474791 -6.345628,2.271133l-0.178121,0.090031l0.178121,-0.090031c-2.365935,0.571267 -5.172339,1.014992 -8.052313,1.014992c0,0 -0.580837,-0.024651 -1.49178,-0.107182l0,-1.299015l-1.28074,0l0,-1.237925l-2.671843,0l0,-5.358979l-0.212974,-0.335471l-0.060021,-0.096463l-0.121976,-0.19185l-0.181994,-0.281881l-0.060988,-0.096463l-0.515976,-1.199338l-0.539208,0l-1.394973,1.338671l-1.457897,0l0,-5.207854l-0.968059,-1.217561l0,-0.677376l-0.523722,0l-1.125851,1.229352l-0.267185,0.428716l0,5.937751l-0.865444,0l0,-1.530525l-3.671849,0l0,2.312934l-0.477253,0l0,-0.61521l-0.151983,0l0,-0.428716l-1.82576,0l0,0.428716l-0.140367,0l0,0.61521l-0.410459,0l0,-0.128615l0.24976,-0.276522l0,-0.055734s-0.2546,-0.006432 -0.636015,0.009646l0,-2.945295l-1.850928,0l0,3.183233a4.840295,5.358979 0 0 0 -0.554699,0.175776l0,-0.229365l-1.468543,0l-0.336886,-6.93452l0.193612,0l0.36883,-0.563763l0.201355,0l0,-0.803846l0.096808,0l0,-0.453371l0.245888,0l0,-0.107178s-0.263313,-0.609855 -1.069706,-0.609855l-0.020331,0l0,-0.367626l-0.359148,0l0,-0.332256l0.146177,0l0,-0.154339l-0.193612,0l0,-1.924944l-0.096805,0l0,1.929234l-0.193612,0l0,0.151121l0.146177,0l0,0.331187l-0.35915,0l0,0.371913l-0.020328,0c-0.806393,0 -1.070675,0.609851 -1.070675,0.609851l0,0.107178l0.245888,0l0,0.453371l0.096808,0l0,0.803846l0.201355,0l0.367863,0.563766l0.193612,0l-0.327204,6.341815l-0.796714,-0.184349l0,-1.146821l-1.927404,0l0,-1.89065l-3.218797,0l0,0.750257l-1.607947,0l-0.73282,1.140393l0,3.245396l-0.446276,-0.801701l-3.602148,0l-0.871254,0.915311l0,0.295818l-0.686354,0l0,0.866009l-0.083253,-0.21436l-0.248791,0l0,-0.287241l-2.478231,0l0,0.288313l-0.248791,0l-0.114233,0.293673l0,1.210056l-0.920623,0l0,1.071799l-0.248791,0l-0.539211,-0.428719l-1.444342,0l-0.539211,0.428719l-0.303002,0l0,2.902421l-1.452088,0l0,-8.788724l-0.887709,0l0,0.230434l-1.265254,0l0,0.50696l-0.360117,0l0,2.291501l-0.516943,0.272235l0,0.750257l-0.6941,0l0,2.063208l-1.087131,0l0,0.535898l-0.227493,0l0,0.187563l-1.914822,0l0,5.659083l-0.078413,0l0,-13.161653l-4.366912,0l0,13.698619l-1.001942,0l0,-0.846717l-1.155861,0l0,-4.813436l-2.849,0l0,7.347161l-6.195576,0',
        'm 90.00301,51.100588 -10.056012,0.044424l0,0l-3.191091,-9.764315l-2.228168,6.765903l0,0l-2.325293,-6.746658l1.016727,0l-2.125496,-6.258285l0,0l-2.296347,-6.761335l0,0l-6.128032,18.066164l5.645986,0l0,0l-2.276184,-6.829926l0,0l-3.549067,-10.649346l0,0l-3.606378,11.532641l0,0l0.698381,0l-2.314671,6.516845l0,0l-1.711458,-4.66309l0,0l1.030926,0l-3.507342,-10.587022l0,0l-1.936607,5.704177l0,0l-1.657759,4.882845l0.977639,0l-1.02869,3.121375l-1.882012,-5.334154l0,0l-0.677447,-1.920075l-1.492427,4.254036l0,0l-1.965808,-5.905246l0,0l-3.665758,11.282509l5.324036,0l0,0l-3.518657,-10.184349l0,0l0.92629,0l-3.630575,-10.745717l0,0l-3.50389,10.745717l0,0l0.957168,0l-2.570622,7.917352l0,0l-1.925165,-6.027621l0,0l-2.662748,8.020746l0,0l-1.228844,-3.362066l0.914097,0l-1.416092,-4.15334l0,0l-1.632333,-4.787567l-0.704015,-2.06485l0,0l-2.064095,5.953854l0,0l-2.663154,7.681832l3.552653,0l-3.770921,-11.557956l0,0l-3.383635,10.348615l1.007733,0l-1.897018,5.463888l0,0l-13.19601,0.000033',
        'm 90.00301,51.100588 -10.056012,-0.091944l0,0l-3.191091,-3.124706l-2.228169,-0.548119l0,0l-2.325294,-2.241824l1.016728,1.774395l-2.125497,-4.140254l0,2.36586l-2.296348,-8.280507l0,0l-6.128034,11.829297l5.645987,2.36586l0,0l-2.276185,0l0,0l-3.549068,-2.36586l0,0l-3.606379,-2.988662l0,0l0.698381,0.622803l-2.314672,-2.36586l0,0l-1.711458,-2.397197l0,0l1.030926,1.326293l-3.507343,-4.25228l0,0l-1.936608,-2.135803l0,0l-1.657759,-2.004451l0.97764,5.914649l-1.02869,-5.914649l-1.882012,-6.506113l0,0l-0.677447,-1.774395l-1.492427,-3.548789l0,0l-1.965808,4.45711l0,0l-3.665759,22.158808l5.324038,-26.024453l0,0l-3.518659,8.296351l0,0l0.92629,-2.41867l-3.630576,11.274799l0,0l-3.503891,8.871973l0,0l0.957168,-2.36586l-2.570623,-3.548789l0,0l-1.925166,3.548789l0,0l-2.662749,-5.323184l0,0l-1.228845,1.774395l0.914098,-1.420572l-1.416092,9.109615l0,-7.097578l-1.632334,4.731719l-0.704015,-7.689042l0,0l-2.064096,4.140253l0,0l-2.663154,5.323184l3.552654,-7.097578l-3.770922,7.689044l0,0l-3.383636,0l1.007733,-3.548789l-1.897019,3.548789l0,0l-13.196014,0.091978'
      ]
    }
  },

  beforeMount () {
    Snap = require('snapsvg-cjs')
  },

  mounted () {
    this.config = {
      duration: 1000,
      delay: 2000
    }

    this.s = Snap('#svg-container')
      .attr({
        viewBox: '0 0 89.958331 89.958336',
        width: 600,
        height: 340
      })

    this.p = this.s.path(this.paths[0])
      .attr({
        fill: 'none',
        strokeWidth: 0.5
      })

    this.t = this.s.text('50%', '75%', 'Jeff Galbraith')
      .attr({
        fontSize: '20px',
        letterSpacing: '5px',
        textAnchor: 'middle'
      })

    this.morph()
    this.$nextTick(() => {
      this.responsiveWidth(this.$q.screen.width)
    })
  },

  destroyed () {
    clearInterval(this.intervalId)
  },

  computed: {
    style () {
      return {
        color: this.colors[this.currentIndex],
        textAlign: 'center',
        fontSize: '16px',
        transition: 'color 1s linear'
      }
    },

    imgStyle () {
      return {
        color: this.colors[this.currentIndex],
        textAlign: 'center',
        transition: 'color 1s linear'
      }
    },

    svgStyle () {
      return {
        stroke: this.colors[this.currentIndex] + ' !important',
        fill: this.colors[this.currentIndex] + ' !important',
        transition: 'stroke 1s linear, fill 1s linear'
      }
    }
  },

  watch: {
    '$q.screen.width' (val) {
      this.responsiveWidth(val)
    }
  },

  methods: {
    morph () {
      this.intervalId = setInterval(() => {
        ++this.currentIndex
        if (this.currentIndex >= 3) {
          this.currentIndex = 0
        }

        this.p.animate({
          // stroke: this.colors[this.currentIndex],
          d: this.paths[this.currentIndex]
        }, this.config.duration, window.mina.easeinout)
        // this.t.animate({
        //   fill: this.colors[this.currentIndex]
        // }, this.config.duration, window.mina.easeinout, this.morph)
      }, this.config.delay)
    },

    responsiveWidth (width) {
      if (width < 390) {
        this.t.attr({
          fontSize: '10px',
          letterSpacing: '1px'
        })
      } else if (width < 485) {
        this.t.attr({
          fontSize: '12px',
          letterSpacing: '2px'
        })
      } else if (width < 645) {
        this.t.attr({
          fontSize: '14px',
          letterSpacing: '3px'
        })
      } else if (width < 745) {
        this.t.attr({
          fontSize: '16px',
          letterSpacing: '5px'
        })
      }
    }
  }
}
</script>
