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
                  buildHookId: '61b35f48c7cf7e36ba49a5c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-ktgyoypd',
                  apiId: 'c69966bb-e944-4b17-8a19-8e40a2712670'
                },
                {
                  buildHookId: '61b35f480619ce30666a4462',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-dffc1iux',
                  apiId: '261db533-8855-4c2f-ade2-5174a8fbddc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhancoc7/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-dffc1iux.netlify.app',
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
