Contributing to @arcgis/FeatureCollection
=================================

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

 1. [Getting Involved](#getting-involved)
 2. [Reporting Bugs](#reporting-bugs)
 3. [Contributing Code](#contributing-code)

## Getting Involved

You can help the project tremendously by discovering and [reporting bugs](#reporting-bugs),
[improving documentation](#improving-documentation),
helping others with [GitHub issues](https://github.com/Esri/FeatureCollection/issues),
tweeting to [@ArcGISJSAPI](https://twitter.com/ArcGISJSAPI),
and spreading the word about mapps-app-javascript and the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) among your colleagues and friends.

## Reporting Bugs

Before reporting a bug on the project's [issues page](https://github.com/Esri/FeatureCollection/issues),
first make sure that your issue is caused by `FeatureCollection`, not your application code.
Second, search through the reported issues for your issue,
and if it's already reported, just add any additional details in the comments.

Also, please only report issues related to the `FeatureCollection`.
If your issue is related to the ArcGIS API for JavaScript, please contact [Esri Tech Support](https://support.esri.com/contact-tech-support) or ask the Esri community on [GeoNet](https://geonet.esri.com/community/developers/web-developers/arcgis-api-for-javascript).

After you made sure that you've found a new `FeatureCollection` bug,
please use the provided issue template when creating your issue.

## Contributing Code

#### Fork the repo
If you haven't already, go to https://github.com/Esri/FeatureCollection and click the [Fork](https://github.com/Esri/FeatureCollection/fork) button.

#### Clone the repo
Clone the repo and run `npm install`.

#### Configure remotes
Move into the directory the cloning process just created (should be FeatureCollection), then make sure your local git knows about all the remotes and branches.
```
$ cd FeatureCollection
# Changes the active directory in the prompt to the newly cloned "FeatureCollection" directory
$ git remote add upstream https://github.com/Esri/FeatureCollection.git
# Assigns the original repository to a remote called "upstream"
$ git fetch upstream
# Pulls in changes not present in your local repository, without modifying your files
```
