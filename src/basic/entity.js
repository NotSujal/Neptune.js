
export class Entity {
    constructor(name="Entity",children=[]) {
        this.name = name;
        this.children = children;
        this.parent = undefined;
        this.components = [];
    }

    getComponent(type){
        return this.components.find(component => component instanceof type);
    }

    hasComponent(type){
        return this.components.some(component => component instanceof type);
    }

    getChildren(){
        return this.children;
    }

    getParent(){
        return this.parent;
    }

    removeComponent(type){
        let index = this.components.findIndex(component => component instanceof type);
        if(index > -1){
            this.components.splice(index,1);
        }
    }

    addComponent(component){
        if (!this.hasComponent(component.constructor)) {
            component.entity = this;
            this.components.push(component);
        }
    }

    addChild(child){
        if (this.children == null) {
            this.children = [];
        }
        this.children.push(child);
        child.parent = this;
    }

    removeChild(child){
        let index = this.children.findIndex(c => c == child);
        if(index > -1){
            this.children.splice(index,1);
        }
        this.children[index].parent = undefined;
    }

    getComponentinChildren(type){
        let component = null;
        this.children.forEach(child => {
            if(child.hasComponent(type)){
                component = child.getComponent(type);
            }
        });
        return component;
    }

    getComponentsInChildren(type){
        let components = [];
        this.children.forEach(child => {
            if(child.hasComponent(type)){
                components.push(child.getComponent(type));
            }
        });
        return components;
    }

    getChildWithComponent(type){
        return this.children.filter(child => child.hasComponent(type));
    }

    getChildrenWithComponent(type){
        let children = [];
        this.children.forEach(child => {
            if(child.hasComponent(type)){
                children.push(child);
            }
        });
        return children;
    }

}