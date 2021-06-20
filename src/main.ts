import '@/main.scss'

import { Map as OlMap } from 'ol'
import { View } from 'ol'
import { MVT } from 'ol/format'
import { VectorTile as VTL, Tile as TL } from 'ol/layer'
import { VectorTile as VTS, OSM } from 'ol/source'

import { target } from '@/target-element'

import url from './assets/url.txt'
import key from './assets/access-token.txt'

const rasterLayer = new TL({ source: new OSM() })

const vectorLayer = new VTL({
  source: new VTS({
    format: new MVT(),
    url: `${url}${key}`,
  }),
})

const map = new OlMap({
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
})

map.addLayer(rasterLayer)
map.addLayer(vectorLayer)

map.setTarget(target)
