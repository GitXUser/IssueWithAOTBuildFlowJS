# FlowTest
<!-- To test ngx-flow
First Do npm install in App folder
Then build shared module -> ng build SharedModule
Then build FeatureX module -> ng build FeatureX
after this you should build App with AOT -> ng build --prod
Then need to deploy the app to reproduce the issue -->

# To Check Issue with AOT Build
npm install -> in App folder
Build dependent lib : npm run BuildApp
# works fine
Run Application : ng serve 
# ERROR with flow constructor injection 
Run aplication with AOT : ng serve --prod