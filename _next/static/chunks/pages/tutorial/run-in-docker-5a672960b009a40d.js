(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{5090:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-in-docker",function(){return a(5432)}])},5432:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l},meta:function(){return r}});a(7294);var t=a(3905),i=a(8470);function o(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var r={id:"run-monika-in-docker",title:"Run Monika in Docker"},s={meta:r},c=function(n){var e=n.children,a=o(n,["children"]);return(0,t.kt)(i.C,Object.assign({meta:r},a),e)};function l(n){var e=n.components,a=o(n,["components"]);return(0,t.kt)(c,Object.assign({},s,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Monika is available as a docker image. You can find the image in the docker hub as ",(0,t.kt)("inlineCode",{parentName:"p"},"hyperjump/monika"),", or pull the image with the following command"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker pull hyperjump/monika\n")),(0,t.kt)("h2",Object.assign({},{id:"running-monika-on-arm--apple-silicon"}),"Running Monika on ARM / Apple Silicon",(0,t.kt)("a",Object.assign({parentName:"h2"},{href:"#running-monika-on-arm--apple-silicon",title:"Direct link to heading",className:"anchor"}),(0,t.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,t.kt)("p",null,"Monika docker image only supports amd64 architecture, you have to pass ",(0,t.kt)("inlineCode",{parentName:"p"},"--platform linux/amd64")," when using ",(0,t.kt)("inlineCode",{parentName:"p"},"hyperjump/monika")," docker image"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker pull --platform linux/amd64 hyperjump/monika\n")),(0,t.kt)("p",null,"Once you've pulled the latest image, you can run it using"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"# Run Monika in foreground\ndocker run --name monika --net=host -it hyperjump/monika:latest\n\n# Or, if you prefer to run Monika in the background\ndocker run --name monika --net=host --detach hyperjump/monika:latest\n\n# On ARM / Apple Silicon chip, pass --platform linux/amd64\ndocker run --name monika --net=host --platform linux/amd64 -it hyperjump/monika:latest\ndocker run --name monika --net=host --platform linux/amd64 --detach hyperjump/monika:latest\n")),(0,t.kt)("p",null,"In the example above, we create a container from the hyperjump/monika base image naming it with",(0,t.kt)("inlineCode",{parentName:"p"},"--name monika"),", indicate we'll use the host machine's network configuration with ",(0,t.kt)("inlineCode",{parentName:"p"},"--net=host")," and let it run in the backround using the ",(0,t.kt)("inlineCode",{parentName:"p"},"--detach")," switch (or interactively with ",(0,t.kt)("inlineCode",{parentName:"p"},"-it"),")."),(0,t.kt)("p",null,"Once monika is up and running, you can see its log using"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker logs monika\n")),(0,t.kt)("p",null,"Or you can stop the container with"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker stop monika\n")),(0,t.kt)("p",null,"For more complex probing, for example to use your existing customized configuration and have the prometheus plugin. First copy your personalized config to a directory, say /config. Then create your container with the directory mounted as a ",(0,t.kt)("inlineCode",{parentName:"p"},"--volume (-v)")," for the container to use, like so:"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker run --name monika_interactive \\\n    --net=host \\\n    -v ${PWD}/config:/config \\\n    -d hyperjump/monika:latest \\\n    monika -c /config/myConfig.yml --prometheus 3001\n\n# On ARM / Apple Silicon\ndocker run --name monika_interactive \\\n    --net=host \\\n    --platform linux/amd64 \\\n    -v ${PWD}/config:/config \\\n    -d hyperjump/monika:latest \\\n    monika -c /config/myConfig.yml --prometheus 3001\n")),(0,t.kt)("h2",Object.assign({},{id:"troubleshooting"}),"Troubleshooting",(0,t.kt)("a",Object.assign({parentName:"h2"},{href:"#troubleshooting",title:"Direct link to heading",className:"anchor"}),(0,t.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,t.kt)("p",null,"Genererally when facing issues with your container or configuration, try the same configuration YAML using regular monika. For instance:"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -c myConfig.yml --prometheus 3001\n")),(0,t.kt)("p",null,"Ensure your container is up and running by issuing simple commands/parameters:"),(0,t.kt)("pre",null,(0,t.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker run --name monika_interactive \\\n    -it hyperjump/monika:latest monika --help\n")),(0,t.kt)("p",null,"For further docker commands and documentation, visit the official Docker ",(0,t.kt)("a",Object.assign({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/run/"}),"documentation here"),"."),(0,t.kt)("p",null,"If all else fails, hit us up at ",(0,t.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/hyperjumptech/monika/discussions"}),"monika discussions")," or ",(0,t.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/hyperjumptech/monika/issues"}),"file an issue"),"."))}l.isMDXComponent=!0}},function(n){n.O(0,[547,778,470,774,888,179],(function(){return e=5090,n(n.s=e);var e}));var e=n.O();_N_E=e}]);