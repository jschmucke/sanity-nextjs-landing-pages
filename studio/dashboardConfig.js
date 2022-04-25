export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6266d0865d816d3e89b3a0e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zswbdcje',
                  apiId: '71351aa3-7754-4c2f-90a3-e304c237f113'
                },
                {
                  buildHookId: '6266d0874d16563e3e132cd0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jigf43d9',
                  apiId: '32164b7c-83dd-4172-9899-c8dc54219b10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jschmucke/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jigf43d9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
