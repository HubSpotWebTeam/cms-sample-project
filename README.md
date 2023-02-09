# cms-sample-project

This is a starter project for HubSpot CMS projects.

## Getting started

Clone this template repository and run `npm install` to install dependencies.

> These guidelines are an abridged version of the [getting started with local development](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development) docs. Please refer to them if you encounter any issues.

First you'll need to install the [HubSpot CLI](https://developers.hubspot.com/docs/cms/hubspot-cli) tools.

Then run `hs init`, which will walk you through the following steps:

1. First you'll create a personal CMS access key to enable authenticated access to your account via the local development tool
2. Next, you’ll enter a name for the account. This name is only seen and used by you, but for consistencies sake we recommend using `DEV` for your sandbox portal.

Once you've completed this simple init flow, you'll see a success message confirming that a configuration file, `hubspot.config.yml`, has been created in your current directory. It will look something like this:

```yaml
defaultPortal: sandbox
portals:
  - name: sandbox
    portalId: 123
    authType: personalaccesskey
    personalAccessKey: >-
      xxxxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxxx
    auth:
      tokenInfo:
        accessToken: >-
          xxxxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxxx
        expiresAt: '2023-02-24T19:38:39.164Z'
```

Now, you can run `npm run start` in your terminal. This will automatically build your project, and upload the output files to your `DEV` portal. Webpack will watch for changes and automatically upload them as you make them.

## Deploying to QA or Production

To deploy to QA or Production, you'll need to create a `QA` or `PROD` portal in your `hubspot.config.yml` file. You can do this by running `hs init` again and selecting the appropriate portal name.

Once you've created a QA or PROD portal, you can deploy to it by running `npm run deploy:qa` or `npm run deploy:prod`.

## Customizing the build

You can customize your build by editing the `webpack.config.js` file. We include a default `cmsConfig` that includes plugins and settings to build your project, but you can add or remove plugins as needed. You can see the default configuration [here](https://github.com/HubSpotWebTeam/webpack-config/blob/main/src/configs/cms.config.js).

For example, by default Webpack will upload the `/dist` folder contents to a `sample-site` folder in your CMS portal. You can change this by editing the `cmsConfig`:

```js
cmsConfig({
  portal: 'DEV',
  cmsSrc: 'dist',
  cmsDest: '<cms-folder-to-upload-to>',
  ...,
}),
```

## Coding standards

We include a custom EsLint and Stylelint configurations. You can customize these by editing the `.eslintrc.js` and `.stylelintrc.js` files, though we encourage you to stick to the standards we've set.

If you want to use TypeScript, we have a [separate package](https://github.com/HubSpotWebTeam/wt-eslint-typescript) you can install:

```bash
npm i -D @hs-web-team/eslint-config-ts
```

Update the `.eslintrc` file:

```js
// .eslintrc
{
  "extends": [
    "@hs-web-team/eslint-config-browser",
    "@hs-web-team/eslint-config-ts"
  ],
}
```

## Further reading

You can find more information in our [Web Vendor Guidelines](https://docs.google.com/document/d/16cAeVe_XXgyRCo7R4Gw_Jy2D-nsUOE35UauoGMKv4CY/edit?usp=sharing) and [Web Technical Guidelines for Vendors](https://docs.google.com/document/d/16h_a-o4qggl40ojDqKePpatudmhvwWUNFzGcH4bL6c4/edit?usp=sharing).
