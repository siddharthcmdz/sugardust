import { mat4 } from 'gl-matrix'


export class SpatialID {
    constructor(public readonly id : number) {}
}

export class Spatial {
    constructor(public modelmat : mat4, modelinvmat: mat4) {}
}

export enum VertexAttribute {
    gaPosition = 0,
    gaNormal = 1,
    gaColor = 2,
    gaTexCoords = 3,
    gaTangent = 4
}

export class GeometryFormatID {
    constructor(public readonly id : number) {}
}

export class GeometryFormat {
    constructor(vertexAttribs : Array<VertexAttribute>) {}
    
}

export class GeometryDataID {
    constructor(public readonly id : number) {}
}

export enum PrimitiveMode {
    pmArray = 0,
    pmIndices = 1,
    pmInvalid = 2
}

export class GeometryData {
    public debugName : string = '' 
    public primMode : PrimitiveMode = PrimitiveMode.pmInvalid
}


export enum PrimitiveType {
    ptLine = 0,
    ptLineStrip = 1,
    ptLineLoop = 2,
    ptTriangle = 3,
    ptTriangleStrip = 4,
    ptInvalid = 5
}

export class GeometryID {
    constructor(public readonly id : number) {}
}

export class GeometryInfo {
    public primType : PrimitiveType = PrimitiveType.ptInvalid
    public offset : number = 0
    public numElements : number = 0
}

export class CollectionID {
    constructor(public readonly id : number) {}
}

export class CollectionInfo {
    public numInstances : number = 0
    public debugName : string = ''

}

export class TextureID {
    constructor(public readonly id : number) {}
}

export enum TextureType {
    tt2D,
    ttCubemap,
    ttInvalid
}

export class TextureInfo {
    public type : TextureType = TextureType.ttInvalid
    public debugName: string = ''
}

export class ShaderID {
    constructor(public readonly id : number) {}
}

export class ShaderInfo {
    public vertex : string = ''
    public fragment : string = ''
}

export class InstanceID {
    constructor(public readonly id : number) {}
}


export class CollectionInstanceInfo {
    public geomID : GeometryID = new GeometryID(-1)
    public spatialID : SpatialID = new SpatialID(-1)
    public shaderID : ShaderID = new ShaderID(-1)

}

export interface sugardustI {
    spatialCreate() : SpatialID
    spatialSetData(spatialID: SpatialID, spatial : Spatial) : boolean
    spatialGetData(spatialID : SpatialID) : Spatial
    spatialDispose(spatialID: SpatialID) : boolean

    geometryFormatCreate(geomFormat : GeometryFormat) : GeometryFormatID
    geometryFormatGetData(geomFormatID : GeometryFormatID) : GeometryFormat
    geometryFormatDispose(geomFormatID : GeometryFormatID) : boolean

    geometryDataCreate(geomFormat : GeometryFormatID, geomData : GeometryData) : GeometryDataID
    geometryDataUpdate(geomDataID: GeometryDataID, vertexAttrib: VertexAttribute, data : Float32Array) : boolean
    geometryDataUpdateIndices(geomDataID: GeometryDataID, data : Uint32Array) : boolean
    geometryDataDispose(geomDataID : GeometryDataID) : boolean

    geometryCreate(geomDataID : GeometryDataID, geomInfo : GeometryInfo) : GeometryID
    geometryGetData() : GeometryInfo
    geometryDispose(geomID : GeometryID) : boolean

    textureCreate(path: string) : TextureID
    textureGetData(texID: TextureID) : TextureInfo 
    textureDispose(texID: TextureID) : boolean

    shaderCreate(shaderInfo : ShaderInfo) : ShaderID
    shaderGetData(shaderID : ShaderID) : ShaderInfo 
    shaderDispose(shaderID : ShaderID) : boolean

    collectionCreate(colinfo : CollectionInfo) : CollectionID
    collectionGetData() : CollectionInfo
    collectionDispose(colID : CollectionID) : boolean

    collectionInstanceCreate(inst : CollectionInstanceInfo) : InstanceID
    collectionInstanceDispose(instID : InstanceID) : boolean
}