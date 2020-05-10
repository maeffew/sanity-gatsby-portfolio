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
                  buildHookId: '5eb83fd5dfd2a00c02e250d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a661aznt',
                  apiId: 'a2b6c053-f486-4716-9101-47e768a5d7b3'
                },
                {
                  buildHookId: '5eb83fd555780e442701a2fe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-saatbvzb',
                  apiId: '3b0d6a1c-e598-499a-ae7e-2ba2ffd6e17a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maeffew/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-saatbvzb.netlify.app',
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
