export const typeOfCategory = {
  'price': 'price',
  'stock': 'stock',
  'brand': 'brand',
  'category': 'category',
  'search': 'search',
}

export const typesOfSort = {
  "urlName": "sort",
  "priceUp": "priceUp",
  "priceDown": "priceDown",
  "ratingUp": "ratingUp",
  "ratingDown": "ratingDown",
}

export const typeOfView = {
  'urlName': 'view',
  'line': 'line',
  'grid': 'grid',
}

export const arrows = {
  'up': '\u2191',
  'down': '\u2193'
}

export const optionsOfSelectForSorting = [
  {
    'value': '',
    'text': 'Choose type of sorting',
    'arrow': null
  },
  {
    'value': typesOfSort.priceUp,
    'text': 'Sort by price',
    'arrow': arrows.up
  },
  {
    'value': typesOfSort.priceDown,
    'text': 'Sort by price',
    'arrow': arrows.down
  },
  {
    'value': typesOfSort.ratingUp,
    'text': 'Sort by rating',
    'arrow': arrows.up
  },
  {
    'value': typesOfSort.ratingDown,
    'text': 'Sort by rating',
    'arrow': arrows.down
  }
]

export const nameOfCopyBtn = {
  'default': 'Copy link',
  'copied': 'Сopied !'
}

export const colorCrimson = '#ed143d';
export const colorBlack = 'black';


