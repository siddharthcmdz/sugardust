import { mat4, vec4 } from 'gl-matrix'
import {VertexAttribute, PrimitiveMode, PrimitiveType, TextureType} from './pdenums'
import INVALID_ID, {GeometryID, SpatialID, ShaderID} from './idsemantics'

export class View {
    constructor(
        public viewProjMat : mat4 = mat4.create(),
        public width: number = 800,
        public height: number = 600,
        public projMat : mat4 = mat4.create(),
        public bkgcolor : vec4 = [0.0, 0.0, 0.0, 1.0],
        public xoff : number = 0,
        public yoff :  number = 0) {}
}

export class Spatial {
    constructor(public modelmat : mat4 = mat4.create(), modelinvmat: mat4 = mat4.create()) {}
}

export class GeometryFormat {
    constructor(vertexAttribs : Array<VertexAttribute>) {}
}

export class GeometryData {
    public debugName : string = '' 
    public primMode : PrimitiveMode = PrimitiveMode.pmInvalid
}

export class GeometryInfo {
    public primType : PrimitiveType = PrimitiveType.ptInvalid
    public offset : number = 0
    public numElements : number = 0
}

export class CollectionInfo {
    public numInstances : number = 0
    public debugName : string = ''

}

export class TextureInfo {
    public type : TextureType = TextureType.ttInvalid
    public debugName: string = ''
}

export class ShaderInfo {
    public vertex : string = ''
    public fragment : string = ''
}

export class CollectionInstanceInfo {
    public geomID : GeometryID = new GeometryID(INVALID_ID)
    public spatialID : SpatialID = new SpatialID(INVALID_ID)
    public shaderID : ShaderID = new ShaderID(INVALID_ID)

}
