module.exports = {
  widget: {
    'path': './src/style/index.scss',
    'pre': 'scss'
  },
  themes: [
    {
      'name': 'redblack',
      'custom': {
        '--color-brand': '#e72528'
      }
    },
    {
      'name': 'blue',
      'custom': {
        '--color-brand': '#2080f7',
        '--dark-menu-item-fill': '#f0f0f0',
        '--dark-menu-item-color': 'rgba(0,0,0,.7)',
        '--dark-menu-item-hover-color': 'rgba(0,0,0,.7)',
        '--dark-menu-item-hover-fill': 'rgba(0,0,0,.04)',
        '--dark-menu-item-pre-fill': 'rgba(0,0,0,.08)',
        '--dark-menu-item-active-color': 'rgba(0,0,0,.9)',
        '--dark-menu-item-active-fill': 'rgba(0,0,0,.08)',
        '--dark-menu-sub-fill': 'rgba(0,0,0,.08)',
        '--dark-menu-dividing-fill': 'rgba(0,0,0,.12)',
        '--dark-menu-box-shadow': '1px 0 0 0 rgba(0,0,0,.12)'
      }
    }
  ]
}
