export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62ce3d3504d6122948961548',
                  title: 'Sanity Studio',
                  name: 'fruits-maps-studio',
                  apiId: '6f2a36a2-adbe-42d3-bf9b-1d825758da8f'
                },
                {
                  buildHookId: '62ce3d356445cc25feb8a69d',
                  title: 'Portfolio Website',
                  name: 'fruits-maps',
                  apiId: '29e3b2d0-a373-4297-ae5e-91c7b206c1dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcbuzzaldrin/Fruits-Maps',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://fruits-maps.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
