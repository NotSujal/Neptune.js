import { Application } from "./neptune.js";

import { Color } from "./basic/color.js";
import { Entity } from './basic/entity.js';
import { Scene } from './basic/scene.js';
import { DestroyQueue } from "./basic/destroyQueue.js";
import { SceneManager } from "./basic/sceneManager.js";

import { Component } from './components/component.js';
import { Transform } from "./components/transform.js";
import { Shape } from "./components/renderable/shape.js";
import { Line } from './components/renderable/line.js';
import { Polygon } from "./components/renderable/polygon.js";
import { Sprite } from "./components/renderable/sprite.js";
import { Sound } from "./components/audio.js";

import { Script, Global, Behaviour } from "./components/scripts/script.js";
import { ScriptManager } from "./components/scripts/scriptManager.js";

import { MouseInput } from "./events/mouseinput.js";
import { KeyboardInput } from "./events/keyboardinput.js";
import { TouchInput } from "./events/touchinput.js";

import {Maths} from "./maths/math.js";
import { Vector2 } from "./maths/vec2.js";

let application = new Application();

export { 
    Application,
    
    Color,Entity,Scene,DestroyQueue,SceneManager,

    Component, Transform, Line, Shape, Script, Polygon, ScriptManager, Sprite, Sound, 
    
    Global, Behaviour,

    MouseInput,KeyboardInput,TouchInput,

    Maths,Vector2,

    application
}