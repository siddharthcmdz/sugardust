import { mat4 } from 'gl-matrix'

export interface SpatialID {
    readonly id : number
}

export interface Spatial {
    modelmat : mat4
    modelinvmat: mat4 
}

export enum VertexAttribute {
    gaPosition = 0,
    gaNormal = 1,
    gaColor = 2,
    gaTexCoords = 3,
    gaTangent = 4
}

export interface GeometryFormatID {
    readonly id: number
}

export interface GeometryFormat {
    vertexAttribs : Array<VertexAttribute>
}

export interface GeometryDataID {
    readonly id : number
}

export interface GeometryData {
    debugName : string,
    primMode : PrimitiveMode
}

export enum PrimitiveMode {
    pmArray = 0,
    pmIndices = 1
}

export enum PrimitiveType {
    ptLine = 0,
    ptLineStrip = 1,
    ptLineLoop = 2,
    ptTriangle = 3,
    ptTriangleStrip = 4  
}

export interface GeometryID {
    readonly id : number
}

export interface GeometryInfo {
    primType : PrimitiveType
    offset : number
    numElements : number
}

export interface CollectionID {
    readonly id : number
}

export interface CollectionInfo {
    numInstances : number
    debugName : string

}

export interface TextureID {
    readonly id : number
}

export enum TextureType {
    tt2D,
    ttCubemap
}

export interface TextureInfo {
    type : TextureType,
    debugName: string
}

export interface ShaderID {
    readonly id: number
}

export interface ShaderInfo {
    vertex : string
    fragment : string
}

export interface InstanceID {
    readonly id: number
}


export interface CollectionInstanceInfo {
    geomID : GeometryID,
    spatialID : SpatialID,
    shaderID : ShaderID,

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