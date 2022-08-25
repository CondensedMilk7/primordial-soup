# PrimordialSoup

This is an open-source frontend app built for [primordialsoup.info](https://primordialsoup.info/) - An educational platform that provides space for thinkers outside academia with free resources.

![Screenshot_2022-03-16_21-09-06](https://user-images.githubusercontent.com/82287873/158648656-5b7cad05-4d52-4205-9bea-e89bc399264a.png)

# Important Note:

This app is no longer in use at primordialsoup.info in favor for a [static site](https://github.com/CondensedMilk7/primordial-soup-static). If the community grows significantly enough that dynamic features become necessary, the development of this app will resume. For now, I have settled for a simpler solution.

## Features

The app features a reader, where you can select articles/videos to view. Both video and text is provided in academic format (following APA style), with references included at the bottom. The references also generate search links on sites such es libgen and sci-hub, which provide free access to a vast variety of literature.

The app makes API calls to the [github repository](https://github.com/CondensedMilk7/primordial-soup-articles) where all the data is stored:

- data for available articles as a list in JSON.
- articles written in markdown (which are then parsed as html).
- article metadata in JSON, containing information about author, references, youtube video ID, etc.

The app features responsive design, usable on pc and mobile devices.

The contact page submits form payload to [formspree](https://formspree.io/) which in turn sends email to the designated recipient (founders of Primordial Soup).

## Tools/libraries

- [Angular](https://angular.io/)
- [NgRx](https://ngrx.io/)
- [Angular Material](https://material.angular.io/)
- [Angular Universal](https://angular.io/guide/universal)
- [TailwindCSS](https://tailwindcss.com/)
- [Ngx Markdown](https://www.npmjs.com/package/ngx-markdown)

## Support

If you want to show appreciation and support our project (both this app and Primordial Soup in general), you can donate on paypal: [paypal.me/primordialpridon](https://www.paypal.com/paypalme/primordialpridon)

## Contribution

Does the application have any issues? Would you like to have a new feature added? Open a new issue in the `issues` section.

Thinking about adding a new feature to this app? or some simple improvements and refactors? Any contribution that improves the app is welcome!
Simply fork this repository, create a branch following the standard [branch naming](https://gist.github.com/revett/88ee5abf5a9a097b4c88) and [commit conventions](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) and create a pull request to the `develop` branch. Message me at pridontetradze@gmail.com if you have any ideas, questions or issues.

## Features to be added

- ~~Add server-side rendering.~~
- ~~Add dynamic meta tags (OG tags, such as og:title, og:image, etc.).~~
- Load article markdown through ngrx effects and have loading state react to it.
- Reset scroll position upon selecting a new article.
- Implement tests.
- Migrate to Angular 14, implement typed form controls.
