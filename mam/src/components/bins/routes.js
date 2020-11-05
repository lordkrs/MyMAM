import ShowBins from "./ShowBins.vue"
import BinInfo from "./BinInfo.vue"


const routes = [{
    name: 'bins',
    path: '/bins',
    meta: { needsAuth: true },
    components: { default: ShowBins},
    children: [
      {
        name: 'bin-info',
        path: ':binId',
        component: BinInfo,
        props: true
      }
    ]
  }]

export default routes