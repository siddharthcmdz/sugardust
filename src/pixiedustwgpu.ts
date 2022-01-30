import INVALID_ID, {SpatialID, GeometryDataID, GeometryFormatID, GeometryID, ShaderID, TextureID, CollectionID, InstanceID} from './idsemantics'
import {VertexAttribute, PrimitiveMode, PrimitiveType, TextureType} from './pdenums'
import {Spatial, GeometryFormat, GeometryData, GeometryInfo, TextureInfo, ShaderInfo, CollectionInfo, CollectionInstanceInfo} from './pdtypes'
import { pixiedustI } from './pixiedustI'

class pixiedustwgpu implements pixiedustI {
    constructor() {}

    spatialCreate() : SpatialID {
        return new SpatialID(INVALID_ID)
    }

    spatialSetData(spatialID: SpatialID, spatial : Spatial) : boolean {
        return false
    }

    spatialGetData(spatialID : SpatialID) : Spatial {
        return new Spatial()
    }

    spatialDispose(spatialID: SpatialID) : boolean {
        return false
    }

    geometryFormatCreate(geomFormat : GeometryFormat) : GeometryFormatID {
        return new GeometryFormatID(INVALID_ID)
    }

    geometryFormatGetData(geomFormatID : GeometryFormatID) : GeometryFormat {
        GeometryFormat gf = new GeometryFormat([VertexAttribute.gaColor])
        return gf
    }

    geometryFormatDispose(geomFormatID : GeometryFormatID) : boolean {
        return false
    }

    geometryDataCreate(geomFormat : GeometryFormatID, geomData : GeometryData) : GeometryDataID {
        return new GeometryDataID(INVALID_ID)
    }

    geometryDataUpdate(geoINVALID_IDmDataID: GeometryDataID, vertexAttrib: VertexAttribute, data : Float32Array) : boolean {
        return false
    }

    geometryDataUpdateIndices(geomDataID: GeometryDataID, data : Uint32Array) : boolean {
        return false
    }

    geometryDataDispose(geomDataID : GeometryDataID) : boolean {
        return false
    }

    geometryCreate(geomDataID : GeometryDataID, geomInfo : GeometryInfo) : GeometryID {
        return new GeometryID(INVALID_ID)
    }

    geometryGetData() : GeometryInfo {
        return new GeometryInfo()
    }

    geometryDispose(geomID : GeometryID) : boolean {
        return false
    }

    textureCreate(path: string) : TextureID {
        return new TextureID(INVALID_ID)
    }

    textureGetData(texID: TextureID) : TextureInfo  {
        return new TextureInfo()
    }

    textureDispose(texID: TextureID) : boolean {
        return false
    }

    shaderCreate(shaderInfo : ShaderInfo) : ShaderID {
        return new ShaderID(INVALID_ID) 
    }

    shaderGetData(shaderID : ShaderID) : ShaderInfo {
        return new ShaderInfo()
    }

    shaderDispose(shaderID : ShaderID) : boolean {
        return false
    }

    collectionCreate(colinfo : CollectionInfo) : CollectionID {
        return new CollectionID(INVALID_ID)
    }

    collectionGetData() : CollectionInfo {
        return new CollectionInfo()
    }

    collectionDispose(colID : CollectionID) : boolean {
        return false
    }

    collectionInstanceCreate(inst : CollectionInstanceInfo) : InstanceID {
        return new InstanceID(INVALID_ID)
    }

    collectionInstanceDispose(instID : InstanceID) : boolean {
        return false
    }

}