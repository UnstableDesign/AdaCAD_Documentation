---
sidebar_position: 1
---

# Install AdaCAD


AdaCAD is built with Angular, a web development framework for progressive web apps. This project was generated with Angular CLI version 7.3.8.

To ask questions, make suggestions, and get support, consider posting to the [AdaCAD Forum](https://groups.google.com/u/1/g/adacad-forum)


### Prerequisites
- [Node.JS](https://nodejs.dev/learn/how-to-install-nodejs) and [Node Package Manager (npm)](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)
- Intermediate JavasScript/TypeScript – if you know JavaScript but not TypeScript, it should be fairly easy to pick up [TypeScript basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).
- Basic HTML/CSS – enough to understand how these file types are structured and interact with scripts
- The Angular CLI requires a minimum Node.js version of either v12.20, v14.15, or v16.10.  



### Installation for developers
1. Fork the [AdaCAD Project](https://github.com/UnstableDesign/AdaCAD/) to your person Github account and clone to setup the software on your local machine. 
2. Open your terminal, navigate to your local AdaCAD directory, and run:
```bash
npm install --force
```

3.  Once installed, run:
```bash
ng serve
```
in the terminal and wait for Angular to compile the app. It should tell you once it's ready. If your system doesn't recognize `ng serve`, make sure that you're in the app and run `node_modules/.bin/ng serve`

4. Navigate to `http://localhost:4200/` and you should see AdaCAD!



## Code Structure
The information here references Angular documentation, such as this page on [Angular concepts and architectural patterns](https://angular.io/guide/architecture).

* An Angular app like AdaCAD is organized into **modules** (bundles of functionality), each of which has their directory in `src/app/<module-name>`. The modules are currently `core`, `mixer`, and `draftdetail` as we'll describe in more detail later in this section.

* Each module provides a "view" into the user's design process. The building blocks of these views are Angular **components** that display some of the data that the user manipulates when designing. Each component has its own subfolder within the module.

* Components don't handle the actual data manipulation, such as editing drafts or logging the user's history of design operations. For that, we have Angular **services**, which components use as dependencies. Each module has a `provider` subdirectory (e.g. `src/app/core/provider`) that holds the relevant services.

* Many of the files in the repository are automatically generated by the Angular CLI to make each component or service function properly. See the Code scaffolding section for some useful commands when making a new entity.

There are three core modules that make up the AdaCAD Project: 

- Core: contains components, services, directives, etc. that are used by both draftdetail (individual draft view) and mixer (generative workspace) modules. Changes to core will affect both deployments and should be checked before pushing.

- DraftDetail: contains all components, services, directives, etc. that are used in "DraftDetail" mode for a given draft. This view supports designing on a simulated loom and viewing yarn paths.

- Mixer: contains all components, services, directives, etc. that are used to design and control the AdaCAD Mixer. This view supports more freeform and parametric experimentation on stitch structures.

### Important Files, Vocabulary, and File Locations
AdaCAD is a large (and growing) application and chances are that you will only need to touch a few files when implementing or augmenting it to your own needs. We are slowly migrating the code from impertive/object-oriented styles to functional/reactive styles, so there is a mixture of styles in this base.  Here, we will list the files in which you can find core information or action points for the program: 


![a labeled diagram of the components of AdaCAD as they are experienced by the viewer](https://github.com/UnstableDesign/AdaCAD/blob/master/src/assets/AdaCAD_Terminology.png)



#### Core Data Types:
You can find a description of all of the core data types used in AdaCAD at [/core/model/datatypes.ts](https://github.com/UnstableDesign/AdaCAD/blob/master/src/app/core/model/datatypes.ts).

* Cell -  This is a single cell or square within the draft. It has two boolean values, one describing the position of the heddle as up/raised or down/lowered, and the second relating to whether or not a weft travels over the warp at this location, which is required for inlay weaving and certain elements of simulation. This value can be set/true or unset/false. 

* Drawdown - A drawdown is the actual pattern of cells and values that make up the weaving draft. For the purposes of computation the cell at \[0][0] always corresponds to the top left corner of the draft in memory.

* Draft - A draft stores the drawdown as well as arrays mapping each warp/weft in the draft to a unique material_id, and system_id. Each draft has a unique id, which allows us to cross link draft information between the model (data) and view components.  

* Loom - A Loom is simply a collection of arrays representing the threading, ti-up and treadling.

* LoomUtil - A loom utility describes a particular kind of loom (jacquard, direct tie-up, etc.) and contains all the functions necessary for producing a threading, tie-up and treadling from a drawdown and vice versa. 

* Tree - The tree is a data representation of the relationships between operations and drafts within the mixer. It is the "brain" of AdaCAD and stores all information relating to screen position of the design components, their current parameter values, and their parent/child relationships to other on screen design elements. 

* Operation - An operation holds all data required to compute specific changes to an input draft. The operation object holds information about the kind of data it can receive and how it manipulates that data. All operations available in AdaCAD are described in: (stored in [/mixer/provider/operation.service.ts](https://github.com/UnstableDesign/AdaCAD/blob/master/src/app/mixer/provider/operation.service.ts)). Adding a new operation at this location adds it to the entire app, without requiring the user to make any custom UI elements for the operation. 


