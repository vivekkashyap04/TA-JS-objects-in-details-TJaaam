```
# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
```

// Using function to create object

function project(name,id,noOfProjects){
  let projectDetails = {};
  projectDetails.name = name;
  projectDetails.id = id;
  projectDetails.noOfProjects = noOfProjects;
  projectDetails.getProjects = function(){
      return projectDetails.noOfProjects;
  };
  projectDetails.changeName = function(newName){
      return projectDetails.name;
  };
  projectDetails.incrementProject = function(value){
       projectDetails.noOfProjects = projectDetails.noOfProjects + value;
       return projectDetails.noOfProjects;
  };
  projectDetails.decrementProject = function(value){
    projectDetails.noOfProjects = projectDetails.noOfProjects - value;
    return projectDetails.noOfProjects;
};
    return projectDetails;
}

// Using Object.create (prototypal pattern)

function project(name,id,noOfProjects){
    let projectDetails = Object.create(project.prototype);
    projectDetails.name = name;
    projectDetails.id = id;
    projectDetails.noOfProjects = noOfProjects;
   
      return projectDetails;
  }

  project.prototype = {
    getProjects(){
        return this.noOfProjects;
    },
    changeName(newName){
        return this.name;
    },
    incrementProject(value){
         this.noOfProjects = this.noOfProjects + value;
         return this.noOfProjects;
    },
    decrementProject(value){
      this.noOfProjects = thid.noOfProjects - value;
      return this.noOfProjects;
  }
  }

  // Using Pseudoclassical Way

  function project(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
   
  }

  project.prototype = {
    getProjects(){
        return this.noOfProjects;
    },
    changeName(newName){
        return this.name;
    },
    incrementProject(value){
         this.noOfProjects = this.noOfProjects + value;
         return this.noOfProjects;
    },
    decrementProject(value){
      this.noOfProjects = thid.noOfProjects - value;
      return this.noOfProjects;
  }
  }

  //Using Class

  class Project{
      constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
      }
      getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        return this.name;
    }
    incrementProject(value){
         this.noOfProjects = this.noOfProjects + value;
         return this.noOfProjects;
    }
    decrementProject(value){
      this.noOfProjects = thid.noOfProjects - value;
      return this.noOfProjects;
  }
  }

let project1 =new Project("canvas",1,3);
let project2 = new Project("web development",2,5);